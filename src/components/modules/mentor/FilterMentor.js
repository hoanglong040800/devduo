import { useState } from 'react'
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@material-ui/core'
import classes from './styles/FilterMentor.module.css'
import { fieldDummy, techDummy, menteeDummy } from 'test/dummy/dummy-data.test'
import { Code, WorkOutlineOutlined } from '@material-ui/icons'

export async function getStaticProps() {
  const res = await fetch(process.env.API_URL + 'field')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  } else {
    console.log(data)
  }

  return {
    props: {},
  }
}

export default function FIlterMentor() {
  const [input, setInput] = useState({
    fullName: '',
    money: 'asc',
    mentee: 0,
  })

  function changeHandler(e) {
    const name = e.target.name
    const value = e.target.value
    setInput({ ...input, [name]: value })
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={8} md={12}>
          <FormGroup>
            <TextField
              label="Search name, field, tech"
              variant="standard"
              color="secondary"
            />
          </FormGroup>
        </Grid>

        <Grid item xs={4} md={12}>
          <FormGroup className={classes.money}>
            <InputLabel>Money</InputLabel>

            <Select name="money" value={input.money} onChange={changeHandler}>
              <MenuItem value="asc">Low to high</MenuItem>
              <MenuItem value="desc">High to low</MenuItem>
            </Select>
          </FormGroup>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.secondRow}>
        <Grid item xs={4} md={12}>
          <FormControl>
            <Box display="flex" alignItems="center">
              <WorkOutlineOutlined className={classes.icon} />
              Field
            </Box>

            <Box className={classes.checkboxGroup}>
              <FormGroup>
                {fieldDummy.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      label={item}
                      control={<Checkbox />}
                    />
                  )
                })}
              </FormGroup>
            </Box>
          </FormControl>
        </Grid>

        <Grid item xs={4} md={12}>
          <FormControl>
            <Box display="flex" alignItems="center">
              <Code className={classes.icon} />
              Tech
            </Box>

            <Box className={classes.checkboxGroup}>
              <FormGroup>
                {techDummy.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      label={item}
                      control={<Checkbox />}
                    />
                  )
                })}
              </FormGroup>
            </Box>
          </FormControl>
        </Grid>

        <Grid item xs={4} md={12}>
          <FormControl>
            <Box display="flex" alignItems="center">
              Mentee: {input.mentee}
            </Box>

            <Box className={classes.checkboxGroup}>
              <RadioGroup
                name="mentee"
                value={input.mentee}
                onChange={changeHandler}
              >
                {menteeDummy.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      label={item}
                      value={item}
                      control={<Radio />}
                    />
                  )
                })}
              </RadioGroup>
            </Box>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  )
}
