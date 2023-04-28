import { UserDto } from './../users/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<{
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
    }>;
    login(user: UserDto): Promise<{
        user: UserDto;
        token: string;
    }>;
    create(user: UserDto): Promise<{
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
    private generateToken;
    private hashPassword;
    private comparePassword;
}
