export const getTime = (time: number): string => {
  const min = Math.floor(time / 60);
  const sec = Math.ceil(time % 60);
  return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
};
