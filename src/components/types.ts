export interface MousePosition {
  x: number,
  y: number,
};

export interface GridParameters {
  systemStatusOnline: boolean,
  mouseIsMoving: boolean,
  mousePosition: MousePosition,
}

export interface ContainerParameters {
  systemStatusOnline: boolean,
}

export interface HeaderParameters {
  systemStatusOnline: boolean,
}