import { ImmutableStateReducer, utils } from "document-model/document";
import { ScopeOfWorkState, ScopeOfWorkLocalState, z } from './types';
import { ScopeOfWorkAction } from './actions';

import { reducer as DeliverablesReducer } from '../src/reducers/deliverables';


const stateReducer: ImmutableStateReducer<ScopeOfWorkState, ScopeOfWorkAction, ScopeOfWorkLocalState> =
    (state, action, dispatch) => {
        if (utils.isBaseAction(action)) {
            return state;
        }

        switch (action.type) {
            case "UPDATE_DELIVERABLE_PROGRESS":
                z.UpdateDeliverableProgressInputSchema().parse(action.input);
                DeliverablesReducer.updateDeliverableProgressOperation(state[action.scope], action, dispatch);
                break;

            case "DELETE_DELIVERABLE":
                z.DeleteDeliverableInputSchema().parse(action.input);
                DeliverablesReducer.deleteDeliverableOperation(state[action.scope], action, dispatch);
                break;

            case "CREATE_DELIVERABLE":
                z.CreateDeliverableInputSchema().parse(action.input);
                DeliverablesReducer.createDeliverableOperation(state[action.scope], action, dispatch);
                break;

            case "UPDATE_DELIVERABLE_STATUS":
                z.UpdateDeliverableStatusInputSchema().parse(action.input);
                DeliverablesReducer.updateDeliverableStatusOperation(state[action.scope], action, dispatch);
                break;

            case "UPDATE_DELIVERABLE_DETAILS":
                z.UpdateDeliverableDetailsInputSchema().parse(action.input);
                DeliverablesReducer.updateDeliverableDetailsOperation(state[action.scope], action, dispatch);
                break;

            case "ADD_KEY_RESULT_TO_DELIVERABLE":
                z.AddKeyResultToDeliverableInputSchema().parse(action.input);
                DeliverablesReducer.addKeyResultToDeliverableOperation(state[action.scope], action, dispatch);
                break;

            case "UPDATE_KEY_RESULT":
                z.UpdateKeyResultInputSchema().parse(action.input);
                DeliverablesReducer.updateKeyResultOperation(state[action.scope], action, dispatch);
                break;

            case "REMOVE_KEY_RESULT_FROM_DELIVERABLE":
                z.RemoveKeyResultFromDeliverableInputSchema().parse(action.input);
                DeliverablesReducer.removeKeyResultFromDeliverableOperation(state[action.scope], action, dispatch);
                break;

            case "SET_DELIVERABLE_BUDGET":
                z.SetDeliverableBudgetInputSchema().parse(action.input);
                DeliverablesReducer.setDeliverableBudgetOperation(state[action.scope], action, dispatch);
                break;

            default:
                return state;
        }
    }

export const reducer = utils.createReducer<ScopeOfWorkState, ScopeOfWorkAction, ScopeOfWorkLocalState>(stateReducer);
