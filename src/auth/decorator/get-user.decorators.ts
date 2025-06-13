import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * @see https://docs.nestjs.com/custom-decorators#param-decorators
 */
export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);
