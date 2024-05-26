import { Action } from 'document-model/document';
import {
    UpdateDeliverableProgressInput,
    DeleteDeliverableInput,
    CreateDeliverableInput,
    UpdateDeliverableStatusInput,
    UpdateDeliverableDetailsInput,
    AddKeyResultToDeliverableInput,
    UpdateKeyResultInput,
    RemoveKeyResultFromDeliverableInput,
    SetDeliverableBudgetInput,
} from '../types';

export type UpdateDeliverableProgressAction = Action<'UPDATE_DELIVERABLE_PROGRESS', UpdateDeliverableProgressInput, 'global'>;
export type DeleteDeliverableAction = Action<'DELETE_DELIVERABLE', DeleteDeliverableInput, 'global'>;
export type CreateDeliverableAction = Action<'CREATE_DELIVERABLE', CreateDeliverableInput, 'global'>;
export type UpdateDeliverableStatusAction = Action<'UPDATE_DELIVERABLE_STATUS', UpdateDeliverableStatusInput, 'global'>;
export type UpdateDeliverableDetailsAction = Action<'UPDATE_DELIVERABLE_DETAILS', UpdateDeliverableDetailsInput, 'global'>;
export type AddKeyResultToDeliverableAction = Action<'ADD_KEY_RESULT_TO_DELIVERABLE', AddKeyResultToDeliverableInput, 'global'>;
export type UpdateKeyResultAction = Action<'UPDATE_KEY_RESULT', UpdateKeyResultInput, 'global'>;
export type RemoveKeyResultFromDeliverableAction = Action<'REMOVE_KEY_RESULT_FROM_DELIVERABLE', RemoveKeyResultFromDeliverableInput, 'global'>;
export type SetDeliverableBudgetAction = Action<'SET_DELIVERABLE_BUDGET', SetDeliverableBudgetInput, 'global'>;

export type ScopeOfWorkDeliverablesAction = 
    | UpdateDeliverableProgressAction
    | DeleteDeliverableAction
    | CreateDeliverableAction
    | UpdateDeliverableStatusAction
    | UpdateDeliverableDetailsAction
    | AddKeyResultToDeliverableAction
    | UpdateKeyResultAction
    | RemoveKeyResultFromDeliverableAction
    | SetDeliverableBudgetAction
;