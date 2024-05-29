// {
//   event: 'ONTASKADD',
//   event_id: '51',
//   data: {
//     FIELDS_BEFORE: 'undefined',
//     FIELDS_AFTER: { ID: '173' },
//     IS_ACCESSIBLE_BEFORE: 'N',
//     IS_ACCESSIBLE_AFTER: 'undefined'
//   },
//   ts: '1716961181',
//   auth: {
//     domain: '8estate.bitrix24.pl',
//     client_endpoint: 'https://8estate.bitrix24.pl/rest/',
//     server_endpoint: 'https://oauth.bitrix.info/rest/',
//     member_id: 'a01bb8d5a3088b6da84dd2f28fd3a34c',
//     application_token: 's0z9c2w1ri1i1zlhtje6emx0pak68ndp'
// 	}

export interface IB24HookIncome { 
	event: string;
	event_id: string;
	data: {
		FIELDS_BEFORE: string;
		FIELDS_AFTER: {
			ID: string;
		};
		IS_ACCESSIBLE_BEFORE: string;
		IS_ACCESSIBLE_AFTER: string;
	};
	ts: string;
	auth: {
		domain: string;
		client_endpoint: string;
		server_endpoint: string;
		member_id: string;
		application_token: string;
	};
}

export interface IB24Task {
  id: string;
  title: string;
  groupId: string;
  responsibleId: string;
  createdBy: string;
  stageId: string;

  parentId: string;
  description: string;
  mark: number | null;
  priority: string;
  multitask: string;
  notViewed: string;
  replicate: string;
  createdDate: string; // ISO date string
  changedBy: string;
  changedDate: string; // ISO date string
  statusChangedBy: string | null;
  closedBy: string | null;
  closedDate: string | null; // ISO date string
  activityDate: string; // ISO date string
  dateStart: string | null; // ISO date string
  deadline: string | null; // ISO date string
  startDatePlan: string | null; // ISO date string
  endDatePlan: string | null; // ISO date string
  guid: string;
  xmlId: string | null;
  commentsCount: number | null;
  serviceCommentsCount: number | null;
  allowChangeDeadline: string;
  allowTimeTracking: string;
  taskControl: string;
  addInReport: string;
  forkedByTemplateId: string | null;
  timeEstimate: string;
  timeSpentInLogs: string | null;
  matchWorkTime: string;
  forumTopicId: string | null;
  forumId: string | null;
  siteId: string;
  subordinate: string;
  exchangeModified: string | null;
  exchangeId: string | null;
  outlookVersion: string;
  viewedDate: string; // ISO date string
  sorting: string | null;
  durationFact: string | null;
  isMuted: string;
  isPinned: string;
  isPinnedInGroup: string;
  flowId: string | null;
  descriptionInBbcode: string;
  status: string;
  statusChangedDate: string; // ISO date string
  durationPlan: string | null;
  durationType: string;
  favorite: string;
  auditors: any[]; // Specify more detailed type if possible
  accomplices: any[]; // Specify more detailed type if possible
  checklist: any[]; // Specify more detailed type if possible
  group: object; // Define interface for group if possible
  creator: object; // Define interface for creator if possible
  responsible: object; // Define interface for responsible if possible
  accomplicesData: any[]; // Specify more detailed type if possible
  auditorsData: any[]; // Specify more detailed type if possible
  newCommentsCount: number;
  action: object; // Define interface for action if possible
  checkListTree: object; // Define interface for checkListTree if possible
  checkListCanAdd: boolean;
}
