enum Status {
  Success = 1,
  Error,
  Forbidden,
}

function getMessage(status: number): { msg: string } {
  let msg: string;
  switch (status) {
    case Status.Success:
      msg = "获取数据成功";
      break;
    case Status.Error:
      msg = "获取数据失败";
      break;
    case Status.Forbidden:
      msg = "用户未登录";
      break;
    default:
      msg = "";
      break;
  }
  return { msg };
}

let { msg } = getMessage(1);

console.log(msg);
