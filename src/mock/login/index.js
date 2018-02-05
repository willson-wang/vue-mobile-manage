import { paramBody } from '@/utils';
// import Mock from 'mockjs';

// const Random = Mock.Random;

export default {
    loginIn: (config) => {
        const param = paramBody(config.body);
        console.log(param);
        if (param.username !== 'wks') {
            return {};
        }
        let result = {
            username: 'wks',
            login_name: '王康森'
        };
        return result;
    }
};
