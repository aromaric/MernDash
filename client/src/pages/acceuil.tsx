import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";

import {
    PieChart,
    IncidentReferrals,
    TotalIncidents,
    IncidentCard,
} from "components";

const Acceuil = () => {
    const { data, isLoading, isError } = useList({
        resource: "incidents",
        config: {
            pagination: {
                pageSize: 4,
            },
        },
    });

    const latestIncidents = data?.data ?? [];

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Something went wrong!</Typography>;

    return (
        <Box>
            <Typography fontSize={20} fontWeight={700} color="#11142D">
                Tableau De Bord
            </Typography>

            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Perte FDS"
                    value={684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Pertes Civil"
                    value={550}
                    series={[60, 40]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Total Incident"
                    value={5684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="HANI Neutralises"
                    value={555}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
            </Box>

            <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <TotalIncidents />
                <IncidentReferrals />
            </Stack>

            <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                <Typography fontSize="18px" fontWeight={600} color="#11142d">
                    Latest Incidents
                </Typography>

                 <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                    {latestIncidents.map((incident) => (
                        <IncidentCard
                            key={incident._id}
                            id={incident._id}
                            incidentType={incident.incidentType}
                            region={incident.region}
                            location={incident.location}
                            longitude={incident.longitude}
                            latitude={incident.latitude}
                            totalami={incident.totalami}
                            photo={incident.photo}
                            unite={incident.unite}
                            date={incident.date}
                            heure={incident.heure}
                            province={incident.province}
                            ville={incident.province}
                            victimfds={incident.victimfds}
                            victimcivil={incident.victimcivil}
                            victimhani={incident.victimhani}
                            
                            blessefds={incident.blessefds}
                            blessecivil={incident.blessecivil}
                            equipementperdu={incident.equipementperdu}
                            equipementrecup={incident.equipementrecup}
                            commentaire={incident.commentaire}
                        
                        />
                    ))}
                </Box>
                     
                     </Box>
        </Box>
    );
    
                    }

export default Acceuil