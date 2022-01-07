const shouldButtonRender = (view: string, status: string) =>
  view === 'all' ||
  (view === 'selected' && status !== 'unselected') ||
  status === view;

export default shouldButtonRender;
