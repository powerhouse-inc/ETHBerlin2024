import { utils } from 'document-model/document';
import { z,
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
import {
    UpdateDeliverableProgressAction,
    DeleteDeliverableAction,
    CreateDeliverableAction,
    UpdateDeliverableStatusAction,
    UpdateDeliverableDetailsAction,
    AddKeyResultToDeliverableAction,
    UpdateKeyResultAction,
    RemoveKeyResultFromDeliverableAction,
    SetDeliverableBudgetAction,
} from './actions';

const { createAction } = utils;

export const updateDeliverableProgress = (input: UpdateDeliverableProgressInput) =>
    createAction<UpdateDeliverableProgressAction>(
        'UPDATE_DELIVERABLE_PROGRESS',
        {...input},
        undefined,
        z.UpdateDeliverableProgressInputSchema,
        'global'
    );

export const deleteDeliverable = (input: DeleteDeliverableInput) =>
    createAction<DeleteDeliverableAction>(
        'DELETE_DELIVERABLE',
        {...input},
        undefined,
        z.DeleteDeliverableInputSchema,
        'global'
    );

export const createDeliverable = (input: CreateDeliverableInput) =>
    createAction<CreateDeliverableAction>(
        'CREATE_DELIVERABLE',
        {...input},
        undefined,
        z.CreateDeliverableInputSchema,
        'global'
    );

export const updateDeliverableStatus = (input: UpdateDeliverableStatusInput) =>
    createAction<UpdateDeliverableStatusAction>(
        'UPDATE_DELIVERABLE_STATUS',
        {...input},
        undefined,
        z.UpdateDeliverableStatusInputSchema,
        'global'
    );

export const updateDeliverableDetails = (input: UpdateDeliverableDetailsInput) =>
    createAction<UpdateDeliverableDetailsAction>(
        'UPDATE_DELIVERABLE_DETAILS',
        {...input},
        undefined,
        z.UpdateDeliverableDetailsInputSchema,
        'global'
    );

export const addKeyResultToDeliverable = (input: AddKeyResultToDeliverableInput) =>
    createAction<AddKeyResultToDeliverableAction>(
        'ADD_KEY_RESULT_TO_DELIVERABLE',
        {...input},
        undefined,
        z.AddKeyResultToDeliverableInputSchema,
        'global'
    );

export const updateKeyResult = (input: UpdateKeyResultInput) =>
    createAction<UpdateKeyResultAction>(
        'UPDATE_KEY_RESULT',
        {...input},
        undefined,
        z.UpdateKeyResultInputSchema,
        'global'
    );

export const removeKeyResultFromDeliverable = (input: RemoveKeyResultFromDeliverableInput) =>
    createAction<RemoveKeyResultFromDeliverableAction>(
        'REMOVE_KEY_RESULT_FROM_DELIVERABLE',
        {...input},
        undefined,
        z.RemoveKeyResultFromDeliverableInputSchema,
        'global'
    );

export const setDeliverableBudget = (input: SetDeliverableBudgetInput) =>
    createAction<SetDeliverableBudgetAction>(
        'SET_DELIVERABLE_BUDGET',
        {...input},
        undefined,
        z.SetDeliverableBudgetInputSchema,
        'global'
    );


