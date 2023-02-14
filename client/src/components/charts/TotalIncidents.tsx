import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@pankod/refine-mui";
import { ArrowCircleUpRounded } from "@mui/icons-material";

import { TotalIncidentsOptions, TotalIncidentsSeries } from "./chart.config";

const TotalIncidents = () => {
    return (
        <Box
            p={4}
            flex={1}
            bgcolor="#fcfcfc"
            id="chart"
            display="flex"
            flexDirection="column"
            borderRadius="15px"
        >
            <Typography fontSize={18} fontWeight={600} color="#11142d">
                Total Incident 2023
            </Typography>

            <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
                <Typography fontSize={28} fontWeight={700} color="#11142d">
                    1055
                </Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                    <ArrowCircleUpRounded
                        sx={{ fontSize: 20, color: "#475be8" }}
                    />
                    <Stack>
                        <Typography fontSize={15} color="#475be8">
                            0.8%
                        </Typography>
                        <Typography fontSize={12} color="#808191">
                            Than Last Month
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <ReactApexChart
                series={TotalIncidentsSeries}
                type="bar"
                height={310}
                options={TotalIncidentsOptions}
            />
        </Box>
    );
};


export default TotalIncidents;