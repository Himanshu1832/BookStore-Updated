import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        user: UserDto;
        token: string;
    }>;
    signUp(user: UserDto, query: any): Promise<{
        user: {
            name: string;
            username: string;
            email: string;
            college_name: string;
            course: string;
            branch: string;
            m_no: string;
            sem: string;
            id?: any;
            createdAt?: any;
            updatedAt?: any;
            deletedAt?: any;
            version?: any;
            _attributes: import("../users/user.entity").User;
            dataValues: import("../users/user.entity").User;
            _creationAttributes: import("../users/user.entity").User;
            isNewRecord: boolean;
            sequelize: import("sequelize").Sequelize;
            _model: import("sequelize").Model<import("../users/user.entity").User, import("../users/user.entity").User>;
        };
        token: string;
    }>;
}
