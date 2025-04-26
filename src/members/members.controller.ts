import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  async create(@Body() createMemberDto: CreateMemberDto) {
    const member = await this.membersService.create(createMemberDto);
    return { message: 'Member created successfully', member };
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(id);
  }

  @Patch(':id')
  async updateMember(@Param('id') id: string, @Body() updateDto: UpdateMemberDto) { 
    const updated = await this.membersService.update(id, updateDto);
    if (!updated) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }
    return { message: `Member with ID ${id} updated successfully` };
  }

  @Delete(':id')
  async deleteMember(@Param('id') id: string) {
    const result = await this.membersService.delete(id);
    if (!result) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }
    return { message: `Member with ID ${id} deleted successfully` };
  }
}
