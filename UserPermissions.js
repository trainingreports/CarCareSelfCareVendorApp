import Constant from 'expo-constants'
import * as Permissions from 'expo-permissions'

class UserPermissions {
    getCameraPermission = async () => {
        if(Constant.platform.android){
            const {status} = await Permissions.askAsync(Permissions.CAMERA);

            if(status != "granted"){
                alert ('We need permission to use your camera')
                const {status} = await Permissions.askAsync(Permissions.CAMERA);
            }
        }
    }
}

export default new UserPermissions();