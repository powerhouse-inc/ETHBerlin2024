export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddKeyResultToDeliverableInput = {
  deliverableId: Scalars['ID']['input'];
  link: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type BudgetAnchorProject = {
  deliverableBudget: Scalars['Float']['output'];
  project: Scalars['ID']['output'];
  workUnitBudget: Scalars['Float']['output'];
};

export type BudgetExpenditure = {
  actuals: Scalars['Float']['output'];
  cap: Scalars['Float']['output'];
  percentage: Scalars['Float']['output'];
};

export type BudgetType =
  | 'CAPEX'
  | 'CONTINGENCY'
  | 'OPEX'
  | 'OVERHEAD';

export type CreateDeliverableInput = {
  budgetAnchor: BudgetAnchorProject;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  keyResults: Array<KeyResult>;
  owner: OwnerRef;
  status: DeliverableStatus | `${DeliverableStatus}`;
  title: Scalars['String']['input'];
  workProgress?: InputMaybe<Progress>;
};

export type DeleteDeliverableInput = {
  id: Scalars['ID']['input'];
};

export type Deliverable = {
  budgetAnchor: Maybe<BudgetAnchorProject>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keyResults: Array<KeyResult>;
  owner: Maybe<OwnerRef>;
  status: DeliverableStatus | `${DeliverableStatus}`;
  title: Scalars['String']['output'];
  workProgress: Maybe<Progress>;
};

export type DeliverableSetStatus =
  | 'DRAFT'
  | 'FINISHED'
  | 'IN_PROGRESS'
  | 'TODO';

export type DeliverableStatus =
  | 'BLOCKED'
  | 'DELIVERED'
  | 'DRAFT'
  | 'IN_PROGRESS'
  | 'TODO'
  | 'WONT_DO';

export type DeliverablesCompleted = {
  completed: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DeliverablesSet = {
  deliverables: Array<Scalars['ID']['output']>;
  deliverablesCompleted: DeliverablesCompleted;
  progress: Progress;
  status: DeliverableSetStatus | `${DeliverableSetStatus}`;
};

export type KeyResult = {
  id: Scalars['ID']['output'];
  link: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Milestone = {
  code: Scalars['String']['output'];
  contributors: Array<OwnerRef>;
  coordinators: Array<OwnerRef>;
  deliverables: Maybe<DeliverablesSet>;
  description: Maybe<Scalars['String']['output']>;
  estimatedBudgetCap: Scalars['Float']['output'];
  estimatedExpenditure: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  targetDate: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type OwnerInfo = {
  code: Maybe<Scalars['String']['output']>;
  imageUrl: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  owner: OwnerRef;
};

export type OwnerRef = {
  code: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  ref: Scalars['String']['output'];
};

export type OwnerRefInput = {
  id: Scalars['ID']['input'];
  ref: Scalars['String']['input'];
};

export type Percentage = {
  value: Scalars['Float']['output'];
};

export type Progress = Percentage | StoryPoints;

export type Project = {
  abstract: Maybe<Scalars['String']['output']>;
  budget: Maybe<Scalars['Float']['output']>;
  budgetType: Maybe<BudgetType | `${BudgetType}`>;
  code: Scalars['String']['output'];
  deliverables: Maybe<DeliverablesSet>;
  expenditure: Maybe<BudgetExpenditure>;
  id: Scalars['ID']['output'];
  imageUrl: Maybe<Scalars['String']['output']>;
  owner: Maybe<OwnerRef>;
  title: Scalars['String']['output'];
};

export type RemoveKeyResultFromDeliverableInput = {
  id: Scalars['ID']['input'];
};

export type Roadmap = {
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  milestones: Array<Milestone>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ScopeOfWorkState = {
  deliverables: Array<Deliverable>;
  milestones: Array<Milestone>;
  owners: Array<OwnerInfo>;
  projects: Array<Project>;
  roadmaps: Array<Roadmap>;
};

export type SetDeliverableBudgetInput = {
  budgetAnchor?: InputMaybe<BudgetAnchorProject>;
  deliverableId: Scalars['ID']['input'];
};

export type StoryPoints = {
  completed: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type UpdateDeliverableDetailsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  owner?: InputMaybe<OwnerRefInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDeliverableProgressInput = {
  id: Scalars['ID']['input'];
  workProgress?: InputMaybe<Progress>;
};

export type UpdateDeliverableStatusInput = {
  id: Scalars['ID']['input'];
  status: DeliverableStatus | `${DeliverableStatus}`;
};

export type UpdateKeyResultInput = {
  keyResultId: Scalars['ID']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};
