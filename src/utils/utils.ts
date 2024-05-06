export const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};


export const transformServiceName = (serviceName:string) => {
  const transformedName = serviceName.replace(/[_-]/g, ' ');
  return transformedName;
}
