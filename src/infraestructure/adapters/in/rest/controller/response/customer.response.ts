import { ApiProperty } from '@nestjs/swagger';

export class CustomerResponse {
    @ApiProperty({ description: 'Unique customer ID', example: '12345' })
    id: string;

    @ApiProperty({ description: 'Customer name', example: 'Juan Pablo' })
    name: string;

    @ApiProperty({ description: 'Customer description', example: 'jpablo@mail.com' })
    email: string;

    @ApiProperty({ description: 'Customer address', example: 'Colombia cra 87 # 41' })
    address: number;
}
