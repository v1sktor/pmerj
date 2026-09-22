-- permissões concedíveis
INSERT INTO public.permissoes (nome, descricao) VALUES
  ('diligencias.view', 'Ver relatórios de diligências e autos'),
  ('hierarquia.view', 'Ver o efetivo completo'),
  ('corregedoria', 'Acesso à Corregedoria'),
  ('juridico', 'Acesso ao Jurídico')
ON CONFLICT (nome) DO NOTHING;

-- RPC segura com horas de patrulha (sem dados pessoais)
CREATE OR REPLACE FUNCTION public.get_rso_horas()
RETURNS TABLE(responsavel_id uuid, encarregado_id uuid, motorista_id uuid, homem3_id uuid, homem4_id uuid, homem5_id uuid, patrulha_inicio timestamptz, patrulha_fim timestamptz)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT responsavel_id, encarregado_id, motorista_id, homem3_id, homem4_id, homem5_id, patrulha_inicio, patrulha_fim
  FROM public.rsos WHERE status = 'aprovado';
$$;
GRANT EXECUTE ON FUNCTION public.get_rso_horas() TO anon, authenticated;

-- cargo_permissoes
DROP POLICY IF EXISTS "Cargo_permissoes visíveis por autenticados" ON public.cargo_permissoes;
CREATE POLICY "cargo_permissoes_select_proprio" ON public.cargo_permissoes FOR SELECT TO authenticated
USING (
  public.has_role(auth.uid(), 'admin')
  OR cargo_id IN (SELECT p.cargo_id FROM public.profiles p WHERE p.user_id = auth.uid())
);

-- permissoes
DROP POLICY IF EXISTS "Permissões visíveis por autenticados" ON public.permissoes;
CREATE POLICY "permissoes_select_proprio" ON public.permissoes FOR SELECT TO authenticated
USING (
  public.has_role(auth.uid(), 'admin')
  OR id IN (
    SELECT cp.permissao_id FROM public.cargo_permissoes cp
    JOIN public.profiles p ON p.cargo_id = cp.cargo_id
    WHERE p.user_id = auth.uid()
  )
);

-- hierarquia
DROP POLICY IF EXISTS "Hierarquia visivel por autenticados" ON public.hierarquia;
CREATE POLICY "hierarquia_select_autorizado" ON public.hierarquia FOR SELECT TO authenticated
USING (public.has_permission_or_admin(auth.uid(), 'hierarquia.view'));

-- rsos
DROP POLICY IF EXISTS "Autenticados podem ver RSOs" ON public.rsos;
CREATE POLICY "rsos_select_autorizado" ON public.rsos FOR SELECT TO authenticated
USING (
  public.has_permission_or_admin(auth.uid(), 'diligencias.view')
  OR autor_email = (auth.jwt() ->> 'email')
);

-- ait
DROP POLICY IF EXISTS "Autenticados podem ver AITs" ON public.ait;
DROP POLICY IF EXISTS "Autenticados podem criar AIT" ON public.ait;
CREATE POLICY "ait_select_autorizado" ON public.ait FOR SELECT TO authenticated
USING (public.has_permission_or_admin(auth.uid(), 'diligencias.view'));
CREATE POLICY "ait_insert_autorizado" ON public.ait FOR INSERT TO authenticated
WITH CHECK (public.has_permission_or_admin(auth.uid(), 'diligencias.view'));

-- denuncias
DROP POLICY IF EXISTS "Corregedoria le denuncias" ON public.denuncias;
DROP POLICY IF EXISTS "Corregedoria atualiza denuncias" ON public.denuncias;
CREATE POLICY "denuncias_select_corregedoria" ON public.denuncias FOR SELECT TO authenticated
USING (public.has_permission_or_admin(auth.uid(), 'corregedoria'));
CREATE POLICY "denuncias_update_corregedoria" ON public.denuncias FOR UPDATE TO authenticated
USING (public.has_permission_or_admin(auth.uid(), 'corregedoria'))
WITH CHECK (public.has_permission_or_admin(auth.uid(), 'corregedoria'));

-- corregedoria_votos
DROP POLICY IF EXISTS "Corregedoria gerencia votos" ON public.corregedoria_votos;
CREATE POLICY "corregedoria_votos_select" ON public.corregedoria_votos FOR SELECT TO authenticated
USING (public.has_permission_or_admin(auth.uid(), 'corregedoria'));
CREATE POLICY "corregedoria_votos_insert" ON public.corregedoria_votos FOR INSERT TO authenticated
WITH CHECK (public.has_permission_or_admin(auth.uid(), 'corregedoria'));
CREATE POLICY "corregedoria_votos_update" ON public.corregedoria_votos FOR UPDATE TO authenticated
USING (public.has_permission_or_admin(auth.uid(), 'corregedoria'))
WITH CHECK (public.has_permission_or_admin(auth.uid(), 'corregedoria'));
CREATE POLICY "corregedoria_votos_delete" ON public.corregedoria_votos FOR DELETE TO authenticated
USING (public.has_permission_or_admin(auth.uid(), 'corregedoria'));

-- juridico_investigacoes: remove regras abertas
DROP POLICY IF EXISTS "Juridico leitura area" ON public.juridico_investigacoes;
DROP POLICY IF EXISTS "Juridico insert area" ON public.juridico_investigacoes;
DROP POLICY IF EXISTS "Juridico update area" ON public.juridico_investigacoes;
DROP POLICY IF EXISTS "Juridico delete area" ON public.juridico_investigacoes;
