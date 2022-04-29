class Observer {
  observers: Array<(data: any) => void>;

  constructor() {
    this.observers = [];
  }

  subscribe = (fn: (data: any) => void) => {
    this.observers.push(fn);
  };

  unsubscribe = (fn: (data: any) => void) => {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  };

  broadcast = (data?: any) => {
    this.observers.forEach((subscriber) => subscriber(data));
  };
}

function setQueryStringParameter(name: string, value: string) {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  window.history.replaceState(
    {},
    '',
    decodeURIComponent(`${window.location.pathname}?${params}`)
  );
}

export { Observer, setQueryStringParameter };
