import { Folder } from './../types';

export const findFolderIdOfState = (folders: Folder[], actionId: number) => {
  return folders.indexOf(folders.find(folder => folder.id === actionId) as Folder)
}