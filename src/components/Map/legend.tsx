import { Table, Text } from "@mantine/core";

interface ChildProps {
    mapStyle: string;
}

export const FcPrevalenceLegend: React.FC<ChildProps> = ({mapStyle}) => {
    return (        
        <div className='absolute z-50 bottom-2 left-1/2 transform -translate-x-1/2'>
            <Text size="md" style={{color: mapStyle.includes("dark") ? "white": "black" }}>Prevalence of insufficient food consumption</Text>
            <Table>
            <Table.Tbody>
                <Table.Tr key="legend-color">
                <Table.Td bg="#29563a" width="75"></Table.Td>
                <Table.Td bg="#73b358" width="75"></Table.Td>
                <Table.Td bg="#cbcc58" width="75"></Table.Td>
                <Table.Td bg="#d5a137" width="75"></Table.Td>
                <Table.Td bg="#eb5a26" width="75"></Table.Td>
                <Table.Td bg="#d3130c" width="75"></Table.Td>
                </Table.Tr>
                <Table.Tr key="legend-labels" style={{color: mapStyle.includes("dark") ? "white": "black" }}>
                <Table.Td width="75">Very low</Table.Td>
                <Table.Td width="75">Low</Table.Td>
                <Table.Td width="75">Moderately low</Table.Td>
                <Table.Td width="75">Moderately high</Table.Td>
                <Table.Td width="75">High</Table.Td>
                <Table.Td width="75">Very high</Table.Td>
                </Table.Tr>
            </Table.Tbody>
            </Table>
      </div>
    )
}