//API Requests
import axios from 'axios';

//Body of post request for aggregate data
export const aggPostReq = {
  "startTimeMillis": 0,
  "endTimeMillis": 0,
  "aggregateBy": [
    {
      "dataTypeName": "com.google.step_count.delta",
      "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
    },
    {
      "dataTypeName": "com.google.calories.expended",
      "dataSourceId": "derived:com.google.calories.expended:com.google.android.gms:from_activities"
    },
    {
      "dataTypeName": "com.google.activity.segment",
      "dataSourceId": "derived:com.google.activity.segment:com.google.android.gms:merge_activity_segments"
    },
    {
      "dataTypeName": "com.google.distance.delta",
      "dataSourceId": "derived:com.google.distance.delta:com.google.android.gms:from_steps<-merge_step_deltas"
    }
    // {
    //   "dataTypeName": "com.google.heart_rate.bpm",
    //   "dataSourceId": "derived:com.google.heart_rate.bpm:com.google.android.gms:merge_heart_rate_bpm"
    // }




    // {
    //   "dataTypeName": "com.google.heart_rate.bpm",
    //   "dataSourceId": "raw:com.google.heart_rate.bpm"
    // }
    //   {
    //     "dataSourceId": "derived:com.google.activity.segment:com.google.android.gms:merge_activity_segments",
    //     "point": [
    //         {
    //             "dataTypeName": "com.google.activity.segment",
    //             "startTimeNanos": "startTime1",
    //             "endTimeNanos": "endTime1",
    //             "value": [
    //                 {
    //                     intVal: 109 // Light sleep
    //                 }
    //             ]
    //         },
    //         {
    //             "dataTypeName": "com.google.activity.segment",
    //             "startTimeNanos": "startTime2",
    //             "endTimeNanos": "endTime2",
    //             "value": [
    //                 {
    //                     intVal: 110 // Deep sleep
    //                 }
    //             ]
    //         },
    //         {
    //             "dataTypeName": "com.google.activity.segment",
    //             "startTimeNanos": "startTime3",
    //             "endTimeNanos": "endTime3",
    //             "value": [
    //                 {
    //                     intVal: 109 // Light sleep
    //                 }
    //             ]
    //         },
    //         {
    //             "dataTypeName": "com.google.activity.segment",
    //             "startTimeNanos": "startTime4",
    //             "endTimeNanos": "endTime4",
    //             "value": [
    //                 {
    //                     intVal: 111 // REM sleep
    //                 }
    //             ]
    //         },
    //         {
    //             "dataTypeName": "com.google.activity.segment",
    //             "startTimeNanos": "startTime5",
    //             "endTimeNanos": "endTime5",
    //             "value": [
    //                 {
    //                     intVal: 112 // Awake
    //                 }
    //             ]
    //         },
    //         {
    //             "dataTypeName": "com.google.activity.segment",
    //             "startTimeNanos": "startTime6",
    //             "endTimeNanos": "endTime6",
    //             "value": [
    //                 {
    //                     intVal: 109 // Light sleep
    //                 }
    //             ]
    //         }
    //      ]
    //  }
  ]
}

//Making API requests
export function createApiRequest(method, path, data) {
  return axios[method](path, data);
}
