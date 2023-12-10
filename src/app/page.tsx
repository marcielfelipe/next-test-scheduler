import DemoScheduler from '@/components/Demo';
import { Avatar, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <Stack spacing={4}>
      <Stack direction='row' px={4}>
        <Typography variant='h5' fontWeight='bold'>Assist Pro</Typography>

      </Stack>
      <Stack direction='row' justifyContent='center'>
        <Paper elevation={3} sx={{p:2, px:5}}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                row
                sx={{gap:5}}
              >
                <FormControlLabel value="female" control={
                  <Stack direction='row' spacing={1}>
                    <Radio value="female"/>
                    <Avatar>A</Avatar>
                    <Stack>
                      <Typography>Alex</Typography>
                      <Typography variant='caption'>Barbeiro</Typography>
                    </Stack>
                  </Stack>
                } label="" />
                <FormControlLabel value="male" control={<Stack direction='row' spacing={1}>
                    <Radio value="male"/>
                    <Avatar>AP</Avatar>
                    <Stack>
                      <Typography>Ana Paula</Typography>
                      <Typography variant='caption'>Manicure</Typography>
                    </Stack>
                  </Stack>} label="" />
                <FormControlLabel value="other" control={<Stack direction='row' spacing={1}>
                    <Radio value="other"/>
                    <Avatar>H</Avatar>
                    <Stack>
                      <Typography>Higor</Typography>
                      <Typography variant='caption'>Barbeiro</Typography>
                    </Stack>
                  </Stack>} label="" />
              </RadioGroup>
            </FormControl>
          </Stack>
        </Paper>
      </Stack>
      <Stack direction='row' spacing={4}>
        <Paper sx={{width:'100%'}}>
          <DemoScheduler/>
        </Paper>
      </Stack>
    </Stack>
  )
}
