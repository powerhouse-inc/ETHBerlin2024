import { z } from 'zod'
import { AddKeyResultToDeliverableInput, BudgetAnchorProject, BudgetExpenditure, BudgetType, CreateDeliverableInput, DeleteDeliverableInput, Deliverable, DeliverableSetStatus, DeliverableStatus, DeliverablesCompleted, DeliverablesSet, KeyResult, Milestone, OwnerInfo, OwnerRef, OwnerRefInput, Percentage, Project, RemoveKeyResultFromDeliverableInput, Roadmap, ScopeOfWorkState, SetDeliverableBudgetInput, StoryPoints, UpdateDeliverableDetailsInput, UpdateDeliverableProgressInput, UpdateDeliverableStatusInput, UpdateKeyResultInput } from './types'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export const BudgetTypeSchema = z.enum(['CAPEX', 'CONTINGENCY', 'OPEX', 'OVERHEAD']);

export const DeliverableSetStatusSchema = z.enum(['DRAFT', 'FINISHED', 'IN_PROGRESS', 'TODO']);

export const DeliverableStatusSchema = z.enum(['BLOCKED', 'DELIVERED', 'DRAFT', 'IN_PROGRESS', 'TODO', 'WONT_DO']);

export function AddKeyResultToDeliverableInputSchema(): z.ZodObject<Properties<AddKeyResultToDeliverableInput>> {
  return z.object({
    deliverableId: z.string(),
    link: z.string(),
    title: z.string()
  })
}

export function BudgetAnchorProjectSchema(): z.ZodObject<Properties<BudgetAnchorProject>> {
  return z.object({
    __typename: z.literal('BudgetAnchorProject').optional(),
    deliverableBudget: z.number(),
    project: z.string(),
    workUnitBudget: z.number()
  })
}

export function BudgetExpenditureSchema(): z.ZodObject<Properties<BudgetExpenditure>> {
  return z.object({
    __typename: z.literal('BudgetExpenditure').optional(),
    actuals: z.number(),
    cap: z.number(),
    percentage: z.number()
  })
}

export function CreateDeliverableInputSchema(): z.ZodObject<Properties<CreateDeliverableInput>> {
  return z.object({
    budgetAnchor: BudgetAnchorProjectSchema(),
    description: z.string().nullish(),
    id: z.string(),
    keyResults: z.array(KeyResultSchema()),
    owner: OwnerRefSchema(),
    status: DeliverableStatusSchema,
    title: z.string(),
    workProgress: ProgressSchema().nullish()
  })
}

export function DeleteDeliverableInputSchema(): z.ZodObject<Properties<DeleteDeliverableInput>> {
  return z.object({
    id: z.string()
  })
}

export function DeliverableSchema(): z.ZodObject<Properties<Deliverable>> {
  return z.object({
    __typename: z.literal('Deliverable').optional(),
    budgetAnchor: BudgetAnchorProjectSchema().nullable(),
    description: z.string().nullable(),
    id: z.string(),
    keyResults: z.array(KeyResultSchema()),
    owner: OwnerRefSchema().nullable(),
    status: DeliverableStatusSchema,
    title: z.string(),
    workProgress: ProgressSchema().nullable()
  })
}

export function DeliverablesCompletedSchema(): z.ZodObject<Properties<DeliverablesCompleted>> {
  return z.object({
    __typename: z.literal('DeliverablesCompleted').optional(),
    completed: z.number(),
    total: z.number()
  })
}

export function DeliverablesSetSchema(): z.ZodObject<Properties<DeliverablesSet>> {
  return z.object({
    __typename: z.literal('DeliverablesSet').optional(),
    deliverables: z.array(z.string()),
    deliverablesCompleted: DeliverablesCompletedSchema(),
    progress: ProgressSchema(),
    status: DeliverableSetStatusSchema
  })
}

export function KeyResultSchema(): z.ZodObject<Properties<KeyResult>> {
  return z.object({
    __typename: z.literal('KeyResult').optional(),
    id: z.string(),
    link: z.string().nullable(),
    title: z.string()
  })
}

export function MilestoneSchema(): z.ZodObject<Properties<Milestone>> {
  return z.object({
    __typename: z.literal('Milestone').optional(),
    code: z.string(),
    contributors: z.array(OwnerRefSchema()),
    coordinators: z.array(OwnerRefSchema()),
    deliverables: DeliverablesSetSchema().nullable(),
    description: z.string().nullable(),
    estimatedBudgetCap: z.number(),
    estimatedExpenditure: z.number(),
    id: z.string(),
    targetDate: z.string().nullable(),
    title: z.string()
  })
}

export function OwnerInfoSchema(): z.ZodObject<Properties<OwnerInfo>> {
  return z.object({
    __typename: z.literal('OwnerInfo').optional(),
    code: z.string().nullable(),
    imageUrl: z.string().nullable(),
    name: z.string().nullable(),
    owner: OwnerRefSchema()
  })
}

export function OwnerRefSchema(): z.ZodObject<Properties<OwnerRef>> {
  return z.object({
    __typename: z.literal('OwnerRef').optional(),
    code: z.string().nullable(),
    id: z.string(),
    name: z.string().nullable(),
    ref: z.string()
  })
}

export function OwnerRefInputSchema(): z.ZodObject<Properties<OwnerRefInput>> {
  return z.object({
    id: z.string(),
    ref: z.string()
  })
}

export function PercentageSchema(): z.ZodObject<Properties<Percentage>> {
  return z.object({
    __typename: z.literal('Percentage').optional(),
    value: z.number()
  })
}

export function ProgressSchema() {
  return z.union([PercentageSchema(), StoryPointsSchema()])
}

export function ProjectSchema(): z.ZodObject<Properties<Project>> {
  return z.object({
    __typename: z.literal('Project').optional(),
    abstract: z.string().nullable(),
    budget: z.number().nullable(),
    budgetType: BudgetTypeSchema.nullable(),
    code: z.string(),
    deliverables: DeliverablesSetSchema().nullable(),
    expenditure: BudgetExpenditureSchema().nullable(),
    id: z.string(),
    imageUrl: z.string().nullable(),
    owner: OwnerRefSchema().nullable(),
    title: z.string()
  })
}

export function RemoveKeyResultFromDeliverableInputSchema(): z.ZodObject<Properties<RemoveKeyResultFromDeliverableInput>> {
  return z.object({
    id: z.string()
  })
}

export function RoadmapSchema(): z.ZodObject<Properties<Roadmap>> {
  return z.object({
    __typename: z.literal('Roadmap').optional(),
    description: z.string().nullable(),
    id: z.string(),
    milestones: z.array(MilestoneSchema()),
    slug: z.string(),
    title: z.string()
  })
}

export function ScopeOfWorkStateSchema(): z.ZodObject<Properties<ScopeOfWorkState>> {
  return z.object({
    __typename: z.literal('ScopeOfWorkState').optional(),
    deliverables: z.array(DeliverableSchema()),
    milestones: z.array(MilestoneSchema()),
    owners: z.array(OwnerInfoSchema()),
    projects: z.array(ProjectSchema()),
    roadmaps: z.array(RoadmapSchema())
  })
}

export function SetDeliverableBudgetInputSchema(): z.ZodObject<Properties<SetDeliverableBudgetInput>> {
  return z.object({
    budgetAnchor: BudgetAnchorProjectSchema().nullish(),
    deliverableId: z.string()
  })
}

export function StoryPointsSchema(): z.ZodObject<Properties<StoryPoints>> {
  return z.object({
    __typename: z.literal('StoryPoints').optional(),
    completed: z.number(),
    total: z.number()
  })
}

export function UpdateDeliverableDetailsInputSchema(): z.ZodObject<Properties<UpdateDeliverableDetailsInput>> {
  return z.object({
    description: z.string().nullish(),
    id: z.string(),
    owner: z.lazy(() => OwnerRefInputSchema().nullish()),
    title: z.string().nullish()
  })
}

export function UpdateDeliverableProgressInputSchema(): z.ZodObject<Properties<UpdateDeliverableProgressInput>> {
  return z.object({
    id: z.string(),
    workProgress: ProgressSchema().nullish()
  })
}

export function UpdateDeliverableStatusInputSchema(): z.ZodObject<Properties<UpdateDeliverableStatusInput>> {
  return z.object({
    id: z.string(),
    status: DeliverableStatusSchema
  })
}

export function UpdateKeyResultInputSchema(): z.ZodObject<Properties<UpdateKeyResultInput>> {
  return z.object({
    keyResultId: z.string(),
    link: z.string().nullish(),
    title: z.string().nullish()
  })
}
