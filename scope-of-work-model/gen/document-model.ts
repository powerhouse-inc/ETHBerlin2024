import type { DocumentModelState } from "document-model/document-model";

export const documentModel: DocumentModelState = {
    "id": "powerhouse/scope-of-work",
    "name": "ScopeOfWork",
    "extension": "phsow",
    "description": "New Description",
    "author": {
        "name": "Powerhouse",
        "website": "https://powerhouse.inc"
    },
    "specifications": [
        {
            "version": 1,
            "changeLog": [],
            "state": {
                "global": {
                    "schema": "type ScopeOfWorkState {\n\tdeliverables: [Deliverable!]!\n    projects: [Project!]!\n\troadmaps: [Roadmap!]!\n\tmilestones : [Milestone!]!\n\t\n\towners:[OwnerInfo!]!\n}\n\ntype Deliverable { \n  id: ID!\n  \n  title: String! # Default value = \"\"\n  description: String\n  keyResults: [KeyResult!]!\n  \n  status: DeliverableStatus!\n  workProgress: Progress\n  \n  owner: OwnerRef\n  budgetAnchor: BudgetAnchorProject\n}\n\nenum DeliverableStatus {\n\t# Don't count towards the number of deliverables to be completed for calculation purposes\n\tWONT_DO\n\t\n\t# Do count towards the number of deliverables\n\tDRAFT # => means 0% progress for calculation purposes, if workProgress isn't set\n  TODO # => means 0% progress for calculation purposes, if workProgress isn't set\n  BLOCKED # => means 0% progress for calculation purposes, if workProgress isn't set\n  IN_PROGRESS # => means 50% progress for calculation purposes, if workProgress isn't set\n  DELIVERED # => means 100% progress for calculation purposes, if workProgress isn't set\n}\n\nunion Progress = StoryPoints | Percentage\n\ntype StoryPoints {\n  total: Int! # a positive number greater than 0\n  completed: Int! # a positive number less than or equal to total, can be 0\n}\n\ntype Percentage {\n  value: Float! # between 0 and 1, where 1 means 100%\n}\n\ntype KeyResult {\n  id: ID!\n  title: String! # default = \"\"\n  link: String\n}\n\ntype BudgetAnchorProject {\n\tproject: ID!\n\tworkUnitBudget: Float! # Default is 1.\n  deliverableBudget: Float! # Calculated value: based on the Total Project Budget, distributed according to SP and/or number of deliverables and their workUnitBudget\n}\n\ntype OwnerRef {\n\tref: String! # \"my-tradfi-org:team\"  \"my-tradfi-org:employee\"\n\tid: ID! # \"10\" \"10\" \n}\n\ntype OwnerInfo {\n\towner: OwnerRef!\n  name: String     # \"Sustainable Ecosystem Scaling\"           \"Sustainable Ecosystem Scaling Core Unit\"\n  code: String     # \"SES\"                                     \"SES-001\"\n  imageUrl: String # null                                      \"https://github.com/makerdao-ses/cu-icons/ses.svg\"\n}\n\ntype Project {\n  id: ID!\n  code: String! # for now we'll make it mandatory to simplify UI logic; placeholder default \"PRJ-??\" can be used \n  title: String! # Default = \"\"\n  owner: OwnerRef\n  \n  abstract: String\n  imageUrl: String\n  \n  deliverables: DeliverablesSet\n  \n  budgetType: BudgetType\n  budget: Float\n  expenditure: BudgetExpenditure\n}\n\ntype DeliverablesSet {\n\tdeliverables: [ID!]!\n  status: DeliverableSetStatus! # Manually set regardless of the status of the included deliverables\n  progress: Progress!  # calculated over the set of included deliverables; \n\t\t\t\t\t\t\t\t\t\t   # story points only if all deliverables are expressed in story points; percentage otherwise\n\t\t\t\t\t\t\t\t\t\t   # if no deliverables are present => 0 out of 0 story points\n  deliverablesCompleted: DeliverablesCompleted! # Alternative progress indicator, kept separate from progress\n}\n\nenum BudgetType {\n  CONTINGENCY\n  OPEX\n  CAPEX\n  OVERHEAD\n}\n\ntype BudgetExpenditure {\n  percentage: Float! # between 0 and 1, where 1 means 100%\n  actuals: Float! # denominated in DAI\n  cap: Float! # denominated in DAI\n}\n\nenum DeliverableSetStatus {\n\tDRAFT\n  TODO\n  IN_PROGRESS\n  FINISHED # A project or milestone can be FINISHED even if not every deliverable is DELIVERED\n}\n\ntype DeliverablesCompleted {\n  total: Int!\n  completed: Int!\n}\n\ntype Roadmap {\n\tid: ID!\n\tslug: String!\n\t# default is based on the title + first segment of the ID \n\t# e.g. title = \"Endgame Phase 2\" and ID = \"1a446b7c-0846-4fa0-ac4d-0e0baba750ec\" \n\t#      slug= \"endgame-phase-2-1a446b7c\" URL = /roadmaps/{slug}\n\t# if the title is empty, use id as value instead\n\t# the slug value should update when a new title is set\n\t# Inspired by https://adamcoster.com/blog/notion-changeable-links \n\t\n\ttitle: String! # default=\"\", e.g. \"Endgame Phase One\"\n\tdescription: String\n\tmilestones: [Milestone!]!\n}\n\n# frontend-side logic can determine the relationship between a project and milestone by examining the shared deliverables.\n\ntype Milestone {\n  id: ID!\n  code: String!   # for now we'll make it mandatory to simplify UI logic; placeholder default \"MS-??\" can be used \n  title: String!  # default=\"\", e.g. \"Alpha Release\"\n  \n  description: String\n  targetDate: String   # Period notation identical to the analytics engine\n\t\t\t\t\t\t\t\t\t\t   # Examples 2023, 2023-H2, 2024-Q2, 2024-05, 2024-W31, 2024-09-15, ...\n\t\t\t\t\t\t\t\t\t\t \n\tdeliverables: DeliverablesSet\n    \n  estimatedBudgetCap: Float! # denominated in DAI\n  estimatedExpenditure: Float! \n  \n  coordinators: [OwnerRef!]!  # sings-off the deliverables of the contributors; typically an individual\n  contributors: [OwnerRef!]!  # typically will refer to a contributor team; maybe an individual\n}",
                    "initialValue": "\"{\\\"deliverables\\\":[],\\\"projects\\\":[],\\\"roadmaps\\\":[],\\\"milestones\\\":[],\\\"owners\\\":[]}\"",
                    "examples": []
                },
                "local": {
                    "schema": "",
                    "initialValue": "\"\"",
                    "examples": []
                }
            },
            "modules": [
                {
                    "id": "UEbxDVq2K5vK5R77fz3d9+1wekc=",
                    "name": "Deliverables",
                    "description": "",
                    "operations": [
                        {
                            "id": "QXwUQ9jAZN13Qx+HEl00P/NcNhE=",
                            "name": "UpdateDeliverableProgress",
                            "description": "",
                            "schema": "input UpdateDeliverableProgressInput {\n    id: ID!\n    workProgress: Progress\n}\n\nunion Progress = StoryPoints | Percentage\n\ntype StoryPoints {\n  total: Int!\n  completed: Int!\n}\n\ntype Percentage {\n  value: Float! # The value should be between 0 and 1, where 1 means 100%\n}\n\n\n",
                            "template": "",
                            "reducer": "",
                            "errors": [],
                            "examples": [],
                            "scope": "global"
                        },
                        {
                            "id": "nwe7QrXHK1Ety9YEemiuwv2tmcg=",
                            "name": "DeleteDeliverable",
                            "description": "",
                            "schema": "input DeleteDeliverableInput {\n    id: ID!\n}\n\n# add new types here\n",
                            "template": "",
                            "reducer": "",
                            "errors": [],
                            "examples": [],
                            "scope": "global"
                        },
                        {
                            "id": "lkj9bJY2dZe8mJP6NOp8MVstYmw=",
                            "name": "CreateDeliverable",
                            "description": "",
                            "schema": "input CreateDeliverableInput {\n     id: ID!\n  title: String!\n  description: String\n  keyResults: [KeyResult!]!\n  status: DeliverableStatus!\n  workProgress: Progress\n  owner: OwnerRef!\n  budgetAnchor: BudgetAnchorProject!\n}\n\ntype BudgetAnchorProject {\n  project: ID!\n  workUnitBudget: Float!\n  deliverableBudget: Float!\n}\n\ntype OwnerRef {\n  ref: String!\n  id: ID!\n  name: String\n  code: String\n}\n\ntype KeyResult {\n  id: ID!\n  title: String!\n  link: String\n}\n\n\nenum DeliverableStatus {\n\t# Don't count towards the number of deliverables to be completed for calculation purposes\n\tWONT_DO\n\t\n\t# Do count towards the number of deliverables\n\tDRAFT # => means 0% progress for calculation purposes, if workProgress isn't set\n  TODO # => means 0% progress for calculation purposes, if workProgress isn't set\n  BLOCKED # => means 0% progress for calculation purposes, if workProgress isn't set\n  IN_PROGRESS # => means 50% progress for calculation purposes, if workProgress isn't set\n  DELIVERED # => means 100% progress for calculation purposes, if workProgress isn't set\n}\n\nunion Progress = StoryPoints | Percentage\n\ntype StoryPoints {\n  total: Int! # a positive number greater than 0\n  completed: Int! # a positive number less than or equal to total, can be 0\n}\n\ntype Percentage {\n  value: Float! # between 0 and 1, where 1 means 100%\n}\n\n",
                            "template": "",
                            "reducer": "",
                            "errors": [],
                            "examples": [],
                            "scope": "global"
                        },
                        {
                            "id": "l82DEE1uj+QjQri0kWdu50qVthk=",
                            "name": "UpdateDeliverableStatus",
                            "description": "",
                            "schema": "input UpdateDeliverableStatusInput {\n    id: ID!\n    status: DeliverableStatus!\n}\n\nenum DeliverableStatus {\n  WONT_DO\n  DRAFT\n  TODO\n  BLOCKED\n  IN_PROGRESS\n  DELIVERED\n}\n\n\n",
                            "template": "",
                            "reducer": "",
                            "errors": [],
                            "examples": [],
                            "scope": "global"
                        },
                        {
                            "id": "QGd2NL/6BBcYq4joe4/Z28pOfFU=",
                            "name": "UpdateDeliverableDetails",
                            "description": "",
                            "schema": "input UpdateDeliverableDetailsInput {\n     id: ID!\n  title: String\n  description: String\n  owner: OwnerRefInput\n}\n\ninput OwnerRefInput {\n  ref: String!\n  id: ID!\n}\n",
                            "template": "",
                            "reducer": "",
                            "errors": [],
                            "examples": [],
                            "scope": "global"
                        },
                        {
                            "id": "GE5+V/CGnJZ518SYJk+aQzrtBoU=",
                            "name": "AddKeyResultToDeliverable",
                            "description": "",
                            "schema": "input AddKeyResultToDeliverableInput {\n    deliverableId: ID!\n    title: String!\n    link: String!\n}\n\n# add new types here\n",
                            "template": "",
                            "reducer": "",
                            "errors": [],
                            "examples": [],
                            "scope": "global"
                        },
                        {
                            "id": "RQNW5mEUSiS0qdyufcdYynsU4qM=",
                            "name": "UpdateKeyResult",
                            "description": "",
                            "schema": "input UpdateKeyResultInput {\n    keyResultId: ID!\n    title: String\n    link: String\n}\n\n# add new types here\n",
                            "template": "",
                            "reducer": "",
                            "errors": [],
                            "examples": [],
                            "scope": "global"
                        },
                        {
                            "id": "5wPDmh3XYwMcqtfQBcwCgpLdiiQ=",
                            "name": "RemoveKeyResultFromDeliverable",
                            "description": "",
                            "schema": "input RemoveKeyResultFromDeliverableInput {\n    id: ID!\n}\n\n# add new types here\n",
                            "template": "",
                            "reducer": "",
                            "errors": [],
                            "examples": [],
                            "scope": "global"
                        },
                        {
                            "id": "b2g/G061VgpsVUOyFtV3gtsrqQE=",
                            "name": "SetDeliverableBudget",
                            "description": "",
                            "schema": "input SetDeliverableBudgetInput {\n    deliverableId: ID!\n    budgetAnchor: BudgetAnchorProject\n}\n\ntype BudgetAnchorProject {\n  project: ID!\n  workUnitBudget: Float!\n  deliverableBudget: Float!\n}\n",
                            "template": "",
                            "reducer": "",
                            "errors": [],
                            "examples": [],
                            "scope": "global"
                        }
                    ]
                }
            ]
        }
    ]
};