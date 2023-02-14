import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  Select,
  MenuItem,
  Button,
} from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  incidentImage,
}: FormProps) => {
  return (
      <Box>
          <Typography fontSize={20} fontWeight={700} color="#11142d">
              {type} un Incident
          </Typography>

          <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
              <form
                  style={{
                      marginTop: "20px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                  }}
                  onSubmit={handleSubmit(onFinishHandler)}
              >
                 
                 <Stack direction="row" gap={4}>
                  <FormControl>
                      <FormHelperText
                          sx={{
                              fontWeight: 500,
                              margin: "10px 0",
                              fontSize: 16,
                              color: "#11142d",
                          }}
                      >
                          Enter date
                      </FormHelperText>

                      <TextField
                          fullWidth
                          required
                          id="outlined-basic"
                          color="info"
                          variant="outlined"
                          {...register("date", { required: true })}
                      />
                  </FormControl>

                  <FormControl>
                      <FormHelperText
                          sx={{
                              fontWeight: 500,
                              margin: "10px 0",
                              fontSize: 16,
                              color: "#11142d",
                          }}
                      >
                          Enter heure
                      </FormHelperText>
                      <TextField
                          fullWidth
                          required
                          id="outlined-basic"
                          color="info"
                          variant="outlined"
                          {...register("heure", { required: true })}
                      />
                  </FormControl>

                  <FormControl sx={{ flex: 1 }}>
                          <FormHelperText
                              sx={{
                                  fontWeight: 500,
                                  margin: "10px 0",
                                  fontSize: 16,
                                  color: "#11142d",
                              }}
                          >
                              Select Unite/Corps
                          </FormHelperText>
                          <Select
                              variant="outlined"
                              color="info"
                              displayEmpty
                              required
                              inputProps={{ "aria-label": "Without label" }}
                              defaultValue="Autre"
                              {...register("unite", {
                                  required: true,
                              })}
                          >
                              <MenuItem value="Militaire">Militaire</MenuItem>
                              <MenuItem value="Gendarmerie">Gendarme</MenuItem>
                              <MenuItem value="Police Nationale">Police Nationale</MenuItem>
                              <MenuItem value="Douane">Douane</MenuItem>
                              <MenuItem value="Sapeur Pompiers">Sapeur Pompiers</MenuItem>
                              <MenuItem value="Police Municipale">Police Municipale</MenuItem>
                              <MenuItem value="Eaux et Forets">Eaux et Forets</MenuItem>
                              <MenuItem value="VDP">VDP</MenuItem>
                              <MenuItem value="Autre">Autre</MenuItem>
                              
                          </Select>
                      </FormControl>


                  </Stack>

                  <Stack direction="row" gap={4}>
                      <FormControl sx={{ flex: 1 }}>
                          <FormHelperText
                              sx={{
                                  fontWeight: 500,
                                  margin: "10px 0",
                                  fontSize: 16,
                                  color: "#11142d",
                              }}
                          >
                              Select Region
                          </FormHelperText>
                          <Select
                              variant="outlined"
                              color="info"
                              displayEmpty
                              required
                              inputProps={{ "aria-label": "Without label" }}
                              defaultValue="---"
                              {...register("region", {
                                  required: true,
                              })}
                          >
                              <MenuItem value="Centre Nord">Centre</MenuItem>
                              <MenuItem value="Sahel">Sahel</MenuItem>
                              <MenuItem value="Hauts-Bassins">Hauts-Bassins</MenuItem>
                              <MenuItem value="Centre-Ouest">Centre-Ouest</MenuItem>
                              <MenuItem value="Est">Est</MenuItem>
                              <MenuItem value="Centre-Est">Centre-Est</MenuItem>
                              <MenuItem value="Boucle du Mouhoun">Boucle du Mouhoun</MenuItem>
                              <MenuItem value="Cascade">Cascade</MenuItem>
                              <MenuItem value="Sud-Ouest">Sud-Ouest</MenuItem>
                              <MenuItem value="Centre">Centre</MenuItem>
                              <MenuItem value="Plateau-Central">Plateau-Central</MenuItem>
                              <MenuItem value="Centre-Sud">Centre-Sud</MenuItem>
                              <MenuItem value="Nord">Nord</MenuItem>
                              <MenuItem value="---">---</MenuItem>
                          </Select>
                      </FormControl>


                      <FormControl sx={{ flex: 1 }}>
                          <FormHelperText
                              sx={{
                                  fontWeight: 500,
                                  margin: "10px 0",
                                  fontSize: 16,
                                  color: "#11142d",
                              }}
                          >
                              Select Province
                          </FormHelperText>
                          <Select
                              variant="outlined"
                              color="info"
                              displayEmpty
                              required
                              inputProps={{ "aria-label": "Without label" }}
                              defaultValue="---"
                              {...register("province", {
                                  required: true,
                              })}
                          >
                              <MenuItem value="Centre Nord">Centre</MenuItem>
                              <MenuItem value="Sahel">Sahel</MenuItem>
                              <MenuItem value="Hauts-Bassins">Hauts-Bassins</MenuItem>
                              <MenuItem value="Centre-Ouest">Centre-Ouest</MenuItem>
                              <MenuItem value="Est">Est</MenuItem>
                              <MenuItem value="Centre-Est">Centre-Est</MenuItem>
                              <MenuItem value="Boucle du Mouhoun">Boucle du Mouhoun</MenuItem>
                              <MenuItem value="Cascade">Cascade</MenuItem>
                              <MenuItem value="Sud-Ouest">Sud-Ouest</MenuItem>
                              <MenuItem value="Centre">Centre</MenuItem>
                              <MenuItem value="Plateau-Central">Plateau-Central</MenuItem>
                              <MenuItem value="Centre-Sud">Centre-Sud</MenuItem>
                              <MenuItem value="Nord">Nord</MenuItem>
                              <MenuItem value="---">---</MenuItem>
                          </Select>
                      </FormControl>

                      <FormControl sx={{ flex: 1 }}>
                          <FormHelperText
                              sx={{
                                  fontWeight: 500,
                                  margin: "10px 0",
                                  fontSize: 16,
                                  color: "#11142d",
                              }}
                          >
                              Select Ville
                          </FormHelperText>
                          <Select
                              variant="outlined"
                              color="info"
                              displayEmpty
                              required
                              inputProps={{ "aria-label": "Without label" }}
                              defaultValue="---"
                              {...register("region", {
                                  required: true,
                              })}
                          >
                              <MenuItem value="Centre Nord">Centre</MenuItem>
                              <MenuItem value="Sahel">Sahel</MenuItem>
                              <MenuItem value="Hauts-Bassins">Hauts-Bassins</MenuItem>
                              <MenuItem value="Centre-Ouest">Centre-Ouest</MenuItem>
                              <MenuItem value="Est">Est</MenuItem>
                              <MenuItem value="Centre-Est">Centre-Est</MenuItem>
                              <MenuItem value="Boucle du Mouhoun">Boucle du Mouhoun</MenuItem>
                              <MenuItem value="Cascade">Cascade</MenuItem>
                              <MenuItem value="Sud-Ouest">Sud-Ouest</MenuItem>
                              <MenuItem value="Centre">Centre</MenuItem>
                              <MenuItem value="Plateau-Central">Plateau-Central</MenuItem>
                              <MenuItem value="Centre-Sud">Centre-Sud</MenuItem>
                              <MenuItem value="Nord">Nord</MenuItem>
                              <MenuItem value="---">---</MenuItem>
                          </Select>
                      </FormControl>
                    </Stack>

                    <Stack direction="row" gap={4}>

                    <FormControl>
                      <FormHelperText
                          sx={{
                              fontWeight: 500,
                              margin: "10px 0",
                              fontSize: 16,
                              color: "#11142d",
                          }}
                      >
                          Location
                      </FormHelperText>
                      <TextField
                          fullWidth
                          required
                          id="outlined-basic"
                          color="info"
                          variant="outlined"
                          {...register("location", { required: true })}
                      />
                  </FormControl>

                  <FormControl>
                      <FormHelperText
                          sx={{
                              fontWeight: 500,
                              margin: "10px 0",
                              fontSize: 16,
                              color: "#11142d",
                          }}
                      >
                          Precision Longitude
                      </FormHelperText>
                      <TextField
                          fullWidth
                          required
                          id="outlined-basic"
                          color="info"
                          variant="outlined"
                          {...register("longitude", { required: true })}
                      />
                  </FormControl>

                  <FormControl>
                      <FormHelperText
                          sx={{
                              fontWeight: 500,
                              margin: "10px 0",
                              fontSize: 16,
                              color: "#11142d",
                          }}
                      >
                          Precision Latitude
                      </FormHelperText>
                      <TextField
                          fullWidth
                          required
                          id="outlined-basic"
                          color="info"
                          variant="outlined"
                          {...register("latitude", { required: true })}
                      />
                  </FormControl>

                


                  </Stack>

                  <Stack direction="row" gap={4}>
                      <FormControl sx={{ flex: 1 }}>
                          <FormHelperText
                              sx={{
                                  fontWeight: 500,
                                  margin: "10px 0",
                                  fontSize: 16,
                                  color: "#11142d",
                              }}
                          >
                              Select Incident Type
                          </FormHelperText>
                          <Select
                              variant="outlined"
                              color="info"
                              displayEmpty
                              required
                              inputProps={{ "aria-label": "Without label" }}
                              defaultValue="Autres"
                              {...register("incidentType", {
                                  required: true,
                              })}
                          >
                              <MenuItem value="IED">IED</MenuItem>
                              <MenuItem value="Attaque">Attaque</MenuItem>
                              <MenuItem value="Clash avec HANI">Clash</MenuItem>
                              <MenuItem value="Infrastructure">Infrastructure</MenuItem>
                              <MenuItem value="Enlevement">Enlevement</MenuItem>
                              <MenuItem value="Alerte - Menace">Alerte-Menace</MenuItem>
                              <MenuItem value="Autres">Autres</MenuItem>
                             {/* <MenuItem value="chalet">Chalet</MenuItem>*/}
                          </Select>
                      </FormControl>

                      </Stack>
                  
                      <Stack direction="row" gap={4}>
                  
                      <FormControl>
                          <FormHelperText
                              sx={{
                                  fontWeight: 500,
                                  margin: "10px 0",
                                  fontSize: 16,
                                  color: "#11142d",
                              }}
                          >
                              Enter victim fds
                          </FormHelperText>
                          <TextField
                              fullWidth
                              required
                              id="outlined-basic"
                              color="info"
                              type="number"
                              variant="outlined"
                              {...register("victimfds", { required: true })}
                          />
                      </FormControl>

                      <FormControl>
                          <FormHelperText
                              sx={{
                                  fontWeight: 500,
                                  margin: "10px 0",
                                  fontSize: 16,
                                  color: "#11142d",
                              }}
                          >
                              Enter victim civil
                          </FormHelperText>
                          <TextField
                              fullWidth
                              required
                              id="outlined-basic"
                              color="info"
                              type="number"
                              variant="outlined"
                              {...register("victimcivil", { required: true })}
                          />
                      </FormControl>


                      <FormControl>
                          <FormHelperText
                              sx={{
                                  fontWeight: 500,
                                  margin: "10px 0",
                                  fontSize: 16,
                                  color: "#11142d",
                              }}
                          >
                              Enter victim HANI
                          </FormHelperText>
                          <TextField
                              fullWidth
                              required
                              id="outlined-basic"
                              color="info"
                              type="number"
                              variant="outlined"
                              {...register("victimhani", { required: true })}
                          />
                      </FormControl>

                      </Stack>






                      <Stack direction="row" gap={4}>
                  
                
                   <FormControl>
                      <FormHelperText
                          sx={{
                              fontWeight: 500,
                              margin: "10px 0",
                              fontSize: 16,
                              color: "#11142d",
                          }}
                      >
                          Enter blesse civil
                      </FormHelperText>
                      <TextField
                          fullWidth
                          required
                          id="outlined-basic"
                          color="info"
                          type="number"
                          variant="outlined"
                          {...register("blessecivil", { required: true })}
                      />
                  </FormControl>


                  <FormControl>
                      <FormHelperText
                          sx={{
                              fontWeight: 500,
                              margin: "10px 0",
                              fontSize: 16,
                              color: "#11142d",
                          }}
                      >
                          Enter blesse fds
                      </FormHelperText>
                      <TextField
                          fullWidth
                          required
                          id="outlined-basic"
                          color="info"
                          type="number"
                          variant="outlined"
                          {...register("blessefds", { required: true })}
                      />
                  </FormControl>

                  </Stack>





                  <Stack direction="row" gap={4}>

                      <FormControl>
                      <FormHelperText
                          sx={{
                              fontWeight: 500,
                              margin: "10px 0",
                              fontSize: 16,
                              color: "#11142d",
                          }}
                      >
                          Liste equip perdu
                      </FormHelperText>
                      <TextareaAutosize
                          minRows={5}
                          required
                          placeholder="Write equipement perdu"
                          color="info"
                          style={{
                              width: "100%",
                              background: "transparent",
                              fontSize: "16px",
                              borderColor: "rgba(0,0,0,0.23)",
                              borderRadius: 6,
                              padding: 10,
                              color: "#919191",
                          }}
                          {...register("equipementperdu", { required: true })}
                      />
                  </FormControl>



                  <FormControl>
                      <FormHelperText
                          sx={{
                              fontWeight: 500,
                              margin: "10px 0",
                              fontSize: 16,
                              color: "#11142d",
                          }}
                      >
                          liste equip recup
                      </FormHelperText>
                      <TextareaAutosize
                          minRows={5}
                          required
                          placeholder="Write equipement recup"
                          color="info"
                          style={{
                              width: "100%",
                              background: "transparent",
                              fontSize: "16px",
                              borderColor: "rgba(0,0,0,0.23)",
                              borderRadius: 6,
                              padding: 10,
                              color: "#919191",
                          }}
                          {...register("equipementrecup", { required: true })}
                      />
                  </FormControl>

                  </Stack>


                      <FormControl>
                      <FormHelperText
                          sx={{
                              fontWeight: 500,
                              margin: "10px 0",
                              fontSize: 16,
                              color: "#11142d",
                          }}
                      >
                          Enter Commentaire
                      </FormHelperText>
                      <TextareaAutosize
                          minRows={5}
                          required
                          placeholder="Write commentaire"
                          color="info"
                          style={{
                              width: "52%",
                              background: "transparent",
                              fontSize: "16px",
                              borderColor: "rgba(0,0,0,0.23)",
                              borderRadius: 6,
                              padding: 10,
                              color: "#919191",
                          }}
                          {...register("commentaire", { required: true })}
                      />
                  </FormControl>


                  

                  
<Stack>
                  <Stack direction="row" gap={2}>
                            <Typography
                                color="#11142d"
                                fontSize={16}
                                fontWeight={500}
                                my="10px"
                            >
                                Incident Photo
                            </Typography>

                            <Button
                                component="label"
                                sx={{
                                    width: "fit-content",
                                    color: "#2ed480",
                                    textTransform: "capitalize",
                                    fontSize: 16,
                                }}
                            >
                                Upload *
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        handleImageChange(e.target.files![0]);
                                    }}
                                />
                            </Button>
                        </Stack>
                        <Typography
                            fontSize={14}
                            color="#808191"
                            sx={{ wordBreak: "break-all" }}
                        >
                            {incidentImage?.name}
                        </Typography>
                    </Stack>

                    <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
                </form>
            </Box>
        </Box>
    );
};

export default Form;