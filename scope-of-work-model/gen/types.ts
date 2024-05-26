import type { Document, ExtendedState } from 'document-model/document';
import type { ScopeOfWorkState } from './schema/types';
import type { ScopeOfWorkAction } from './actions';

export { z } from './schema';
export type * from './schema/types';
type ScopeOfWorkLocalState = Record<PropertyKey, never>;
export type ExtendedScopeOfWorkState = ExtendedState<ScopeOfWorkState, ScopeOfWorkLocalState>;
export type ScopeOfWorkDocument = Document<ScopeOfWorkState, ScopeOfWorkAction, ScopeOfWorkLocalState>;
export { ScopeOfWorkState, ScopeOfWorkLocalState, ScopeOfWorkAction };