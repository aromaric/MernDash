import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import {
    Box,
    Stack,
    Typography,
    TextField,
    Select,
    MenuItem,
} from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { useMemo } from "react";

import { IncidentCard, CustomButton } from "components";

const AllIncidents = () => {
    const navigate = useNavigate();

    const {
        tableQueryResult: { data, isLoading, isError },
        current,
        setCurrent,
        setPageSize,
        pageCount,
        sorter,
        setSorter,
        filters,
        setFilters,
    } = useTable();

    const allIncidents = data?.data ?? [];

    const currentRegion = sorter.find((item) => item.field === "region")?.order;

    const toggleSort = (field: string) => {
        setSorter([{ field, order: currentRegion === "asc" ? "desc" : "asc" }]);
    };

    const currentFilterValues = useMemo(() => {
        const logicalFilters = filters.flatMap((item) =>
            "field" in item ? item : [],
        );

        return {
            date:
                logicalFilters.find((item) => item.field === "date")?.value ||
                "",
            incidentType:
                logicalFilters.find((item) => item.field === "incidentType")
                    ?.value || "",
        };
    }, [filters]);

    if (isLoading) return <Typography>Chargement...</Typography>;
    if (isError) return <Typography>Erreur...</Typography>;

    return (
        <Box>
            <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                <Stack direction="column" width="100%">
                    <Typography fontSize={25} fontWeight={700} color="#11142d">
                        {!allIncidents.length
                            ? "Il n'y a pas d'incidents"
                            : "Tous les Incidents"}
                    </Typography>
                    <Box
                        mb={2}
                        mt={3}
                        display="flex"
                        width="84%"
                        justifyContent="space-between"
                        flexWrap="wrap"
                    >
                        <Box
                            display="flex"
                            gap={2}
                            flexWrap="wrap"
                            mb={{ xs: "20px", sm: 0 }}
                        >
                            <CustomButton
                                title={`Sort region ${
                                    currentRegion === "asc" ? "↑" : "↓"
                                }`}
                                handleClick={() => toggleSort("region")}
                                backgroundColor="#475be8"
                                color="#fcfcfc"
                            />
                            <TextField
                                variant="outlined"
                                color="info"
                                placeholder="Search by city"
                                value={currentFilterValues.date}
                                onChange={(e) => {
                                    setFilters([
                                        {
                                            field: "ville",
                                            operator: "contains",
                                            value: e.currentTarget.value
                                                ? e.currentTarget.value
                                                : undefined,
                                        },
                                    ]);
                                }}
                            />
                            <Select
                                variant="outlined"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue=""
                                value={currentFilterValues.incidentType}
                                onChange={(e) => {
                                    setFilters(
                                        [
                                            {
                                                field: "incidentType",
                                                operator: "eq",
                                                value: e.target.value,
                                            },
                                        ],
                                        "replace",
                                    );
                                }}
                            >
                                <MenuItem value="">Tout</MenuItem>
                                {[
                                    "IED",
                                    "Attaque",
                                    "Clash Avec HANI",
                                    "Enlevement",
                                    "Alerte - Menace",
                                    "Infrastructure",
                                    "Autres",
                                    
                                ].map((type) => (
                                    <MenuItem
                                        key={type}
                                        value={type.toLowerCase()}
                                    >
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </Box>
                </Stack>
            </Box>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <CustomButton
                    title="Ajouter Incident"
                    handleClick={() => navigate("/incidents/create")}
                    backgroundColor="#475be8"
                    color="#fcfcfc"
                    icon={<Add />}
                />
            </Stack>

            <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {allIncidents?.map((incident) => (
                    <IncidentCard
                        key={incident._id}
                        incidentType={incident.type}
                        id={incident._id}
                        unite={incident.unite}
                        date={incident.date}
                        heure={incident.heure}
                        location={incident.location}
                        longitude={incident.longitude}
                        latitude={incident.latitude}
                        region={incident.region}
                        province={incident.province}
                        ville={incident.ville}
                        victimfds={incident.victimfds}
                        victimcivil={incident.victimcivil}
                        victimhani={incident.victimhani}
                        totalami={incident.totalami}
                        blessefds={incident.blessefds}
                        blessecivil={incident.blessecivil}
                        equipementperdu={incident.equipementperdu}
                        equipementrecup={incident.equipementrecup}
                        commentaire={incident.commentaire}
                        photo={incident.photo}
                    />
                ))}
            </Box>

            {allIncidents.length > 0 && (
                <Box display="flex" gap={2} mt={3} flexWrap="wrap">
                    <CustomButton
                        title="Precedent"
                        handleClick={() => setCurrent((prev) => prev - 1)}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                        disabled={!(current > 1)}
                    />
                    <Box
                        display={{ xs: "hidden", sm: "flex" }}
                        alignItems="center"
                        gap="5px"
                    >
                        Page{" "}
                        <strong>
                            {current} of {pageCount}
                        </strong>
                    </Box>
                    <CustomButton
                        title="Suivant"
                        handleClick={() => setCurrent((prev) => prev + 1)}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                        disabled={current === pageCount}
                    />
                    <Select
                        variant="outlined"
                        color="info"
                        displayEmpty
                        required
                        inputProps={{ "aria-label": "Without label" }}
                        defaultValue={10}
                        onChange={(e) =>
                            setPageSize(
                                e.target.value ? Number(e.target.value) : 10,
                            )
                        }
                    >
                        {[10, 20, 30, 40, 50].map((size) => (
                            <MenuItem key={size} value={size}>
                                Show {size}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            )}
        </Box>
    );
};


export default AllIncidents;