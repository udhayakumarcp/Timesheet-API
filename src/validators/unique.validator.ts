import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { PrismaService } from '../prisma/prisma.service';

@ValidatorConstraint({ name: 'isUnique', async: true })
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}
  async validate(value: string, validationArguments: ValidationArguments) {
    const model = validationArguments.constraints[0];
    const field = validationArguments.constraints[1]
      ? validationArguments.constraints[1]
      : validationArguments.property;
    const user = await this.prisma[model]?.findUnique({
      where: {
        [field]: value,
      },
    });

    return !user;
  }

  defaultMessage() {
    return '$property $value is already exist';
  }
}

// export function IsUnique(
//   model: string,
//   field: string,
//   validationOptions?: ValidationOptions,
// ) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName: propertyName,
//       constraints: [{ table: model, field: field }],
//       options: validationOptions,
//       validator: IsUnique,
//     });
//   };
// }
