export enum EStatus {
  idle = "idle",
  loading = "loading",
  failed = "failed",
}

export interface IPokemons{
  name: string,
  url: string,
  data: any | null,
  status: EStatus.idle | EStatus.loading | EStatus.failed;
}

  