import {http} from './http'
import {apis} from './config'

export function getProjIssueDiscuss(projId, issueId, params=null){
    return http.get(apis.issueDisOfProject.replace(':projId', projId).replace(':issueId', issueId), {
        params: params
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}