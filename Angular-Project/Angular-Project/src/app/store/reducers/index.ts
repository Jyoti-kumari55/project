import {ActionReducer,ActionReducerMap,createFeatureSelector,createSelector,MetaReducer} from '@ngrx/store';
import { environment } from 'src/environments/environment';

  
  export class State {
  
  }
  
  export const admissionsFeatureKey = 'admissions';
  
  const STUDENT_IDENTIFICATION = '[STUDENT IDENTIFICATION] save details';
  export function reducer(state: { student: any; }, action: { type: any; payload: any; }) {
    switch (action.type) {
      case STUDENT_IDENTIFICATION:
        const student = state ? state.student : {};
        const newStudentIdentityInfo = { ...student, new_student_identity_info: action.payload };
        return {
          ...state,
          new_student_identity_info: newStudentIdentityInfo
        };
      default:
        return state;
    }
  }
  
  export const reducers: ActionReducerMap<State> = {
  
  };
  
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];