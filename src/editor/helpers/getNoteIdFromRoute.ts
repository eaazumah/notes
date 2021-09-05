import {IEditorRoute} from '../../@shared/@types';

const getNoteIdFromRoute = (route: IEditorRoute) => {
  return route.params?.noteId;
};

export default getNoteIdFromRoute;
