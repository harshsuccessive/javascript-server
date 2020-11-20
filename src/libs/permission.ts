import { permissions }  from './constant';

export const hasPermission = (moduleName: string, role: string, permissionType: string): boolean => {
    const permission = permissions[moduleName];
    if ( permission.all.includes(role) ) {
        return true;
    }
    if (Object.values(permission[permissionType]).includes(role)) {
      return true;
    } else {
      return false;
    }
};
