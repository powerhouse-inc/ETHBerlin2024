import { SignalDispatch } from 'document-model/document';
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
import { ScopeOfWorkState } from '../types';

export interface ScopeOfWorkDeliverablesOperations {
    updateDeliverableProgressOperation: (state: ScopeOfWorkState, action: UpdateDeliverableProgressAction, dispatch?: SignalDispatch) => void,
    deleteDeliverableOperation: (state: ScopeOfWorkState, action: DeleteDeliverableAction, dispatch?: SignalDispatch) => void,
    createDeliverableOperation: (state: ScopeOfWorkState, action: CreateDeliverableAction, dispatch?: SignalDispatch) => void,
    updateDeliverableStatusOperation: (state: ScopeOfWorkState, action: UpdateDeliverableStatusAction, dispatch?: SignalDispatch) => void,
    updateDeliverableDetailsOperation: (state: ScopeOfWorkState, action: UpdateDeliverableDetailsAction, dispatch?: SignalDispatch) => void,
    addKeyResultToDeliverableOperation: (state: ScopeOfWorkState, action: AddKeyResultToDeliverableAction, dispatch?: SignalDispatch) => void,
    updateKeyResultOperation: (state: ScopeOfWorkState, action: UpdateKeyResultAction, dispatch?: SignalDispatch) => void,
    removeKeyResultFromDeliverableOperation: (state: ScopeOfWorkState, action: RemoveKeyResultFromDeliverableAction, dispatch?: SignalDispatch) => void,
    setDeliverableBudgetOperation: (state: ScopeOfWorkState, action: SetDeliverableBudgetAction, dispatch?: SignalDispatch) => void,
}