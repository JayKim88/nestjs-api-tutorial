import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * @see https://docs.nestjs.com/custom-decorators#param-decorators
 */
export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
