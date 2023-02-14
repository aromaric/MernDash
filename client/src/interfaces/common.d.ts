export interface CustomButtonProps {
    type?: string,
    title: string,
    backgroundColor: string,
    color: string,
    fullWidth?: boolean,
    icon?: ReactNode,
    disabled?: boolean,
    handleClick?: () => void
}

export interface ProfileProps {
    type: string,
    name: string,
    avatar: string,
    email: string,
    incidents: Array | undefined
}

export interface IncidentProps {
    _id: string,
    date: Date,
  unite: string,
  location: string,
  longitude:number,
  latitude:number,
  region: string,
  incidentType: string,
  photo: string,
  incidentType: string,
  //unite: string,
  //date: Date,
  heure: Date,
  //location: string,
  //region: string,
  province: string,
  ville: string,
  victimfds: number,
  victimcivil: number,
  victimhani:number,
  totalami: number,
  blessefds: number,
  blessecivil: number,
  equipementperdu: string,
  equipementrecup: string,
  commentaire: string,
}

export interface FormProps {
    type: string,
    register: any,
    onFinish: (values: FieldValues) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>,
    formLoading: boolean,
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
    handleImageChange: (file) => void,
    onFinishHandler: (data: FieldValues) => Promise<void> | void,
    incidentImage: { name: string, url: string },
}
