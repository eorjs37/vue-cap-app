import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const writeFile = (path, data) => {
  return Filesystem.writeFile({
    path: path,
    data: data,
    directory: Directory.Data,
  });
};

const loadFiles = () => {
  return Filesystem.readdir({
    path: '',
    directory: Directory.Data,
  });
};

export { writeFile, loadFiles };
