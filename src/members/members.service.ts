import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Members } from './entities/members.entity';
import { Repository } from 'typeorm';
@Injectable()
export class MembersService {

  constructor(
    @InjectRepository(Members)
    private membersRepository: Repository<Members>,
  ) {}

  create(createMemberDto: CreateMemberDto): Promise<Members> {
    const member = this.membersRepository.create(createMemberDto);
    return this.membersRepository.save(member);
  }

  async update(id: string, updateDto: UpdateMemberDto): Promise<boolean> {
    const result = await this.membersRepository.update(id, updateDto);
    return result.affected > 0;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.membersRepository.delete(id);
    return result.affected > 0;
  }

  findAll(): Promise<Members[]> {
    return this.membersRepository.find();
  }

  findOne(id: string): Promise<Members | null> {
    return this.membersRepository.findOneBy({ id });
  }
}
