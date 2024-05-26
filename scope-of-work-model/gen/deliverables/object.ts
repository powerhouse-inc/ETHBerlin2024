import { BaseDocument } from 'document-model/document';
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
    ScopeOfWorkState,
    ScopeOfWorkLocalState
} from '../types';
import {
    updateDeliverableProgress,
    deleteDeliverable,
    createDeliverable,
    updateDeliverableStatus,
    updateDeliverableDetails,
    addKeyResultToDeliverable,
    updateKeyResult,
    removeKeyResultFromDeliverable,
    setDeliverableBudget,
} from './creators';
import { ScopeOfWorkAction } from '../actions';

export default class ScopeOfWork_Deliverables extends BaseDocument<
    ScopeOfWorkState,
    ScopeOfWorkAction,
    ScopeOfWorkLocalState
> {
    public updateDeliverableProgress(input: UpdateDeliverableProgressInput) {
        return this.dispatch(updateDeliverableProgress(input));
    }
    
    public deleteDeliverable(input: DeleteDeliverableInput) {
        return this.dispatch(deleteDeliverable(input));
    }
    
    public createDeliverable(input: CreateDeliverableInput) {
        return this.dispatch(createDeliverable(input));
    }
    
    public updateDeliverableStatus(input: UpdateDeliverableStatusInput) {
        return this.dispatch(updateDeliverableStatus(input));
    }
    
    public updateDeliverableDetails(input: UpdateDeliverableDetailsInput) {
        return this.dispatch(updateDeliverableDetails(input));
    }
    
    public addKeyResultToDeliverable(input: AddKeyResultToDeliverableInput) {
        return this.dispatch(addKeyResultToDeliverable(input));
    }
    
    public updateKeyResult(input: UpdateKeyResultInput) {
        return this.dispatch(updateKeyResult(input));
    }
    
    public removeKeyResultFromDeliverable(input: RemoveKeyResultFromDeliverableInput) {
        return this.dispatch(removeKeyResultFromDeliverable(input));
    }
    
    public setDeliverableBudget(input: SetDeliverableBudgetInput) {
        return this.dispatch(setDeliverableBudget(input));
    }
    
}