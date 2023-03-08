import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import {ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Role} from "./roles.model";

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {

    }

    @ApiOperation({ summary: 'Создание роли'})
    @ApiResponse({ status: 200, type: Role})
    @Post()
    create (@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @ApiOperation({ summary: 'Получение роли по типу'})
    @ApiResponse({ status: 200, type: Role})
    @Get('/:role')
    getByValue(@Param('role') value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
