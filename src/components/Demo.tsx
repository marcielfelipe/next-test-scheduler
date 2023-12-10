'use client'
import { Scheduler } from "@aldabil/react-scheduler";
import type { SchedulerRef } from '@aldabil/react-scheduler/types';
import { Button, Chip, Paper, Stack, Typography } from '@mui/material';
import { useRef } from 'react';
import {ptBR} from 'date-fns/locale'

const translations={
  navigation: {
  month: "Mês",
  week: "Semana",
  day: "Dia",
  today: "Hoje"
  },
  form: {
  addTitle: "Novo evento",
  editTitle: "Editar Evento",
  confirm: "Salvar",
  delete: "Deletar",
  cancel: "Cancelar"
  },
  event: {
  title: "Título",
  start: "Início",
  end: "Fim",
  allDay: "Todos dias"
 },
  validation: {
  required: "Obrigatório",
  invalidEmail: "Email inválido",
  onlyNumbers: "Apenas números",
  min: "Mínimo de {{min}} caracteres",
  max: "Máximo de {{max}} caracteres"
  },
  moreEvents: "Mais...",
  loading: "Carregando..."
 }

export default function DemoScheduler({height}:any){
  const calendarRef = useRef<SchedulerRef>(null);
  return(
    <Stack>
      <Button variant='contained' onClick={()=>{
        calendarRef?.current?.scheduler.handleState('month','view')
      }}>
        Mês
      </Button>

      <Scheduler
        locale={ptBR}
        ref={calendarRef}
        height={height||450}
        view="month"
        hourFormat='24'
        dialogMaxWidth='xs'
        week={{
          weekDays: [0,1,2,3,4,5,6],
          weekStartOn: 0,
          startHour: 0,
          endHour: 24,
          step: 30,
        }}
        month={{
          weekDays: [0,1,2,3,4,5,6],
          weekStartOn: 0,
          startHour: 0,
          endHour: 24,
        }}
        translations={translations}
        onEventDrop={async(droppedOn,updatedEvent,originalEvent) => {
          alert(droppedOn)
          console.log(updatedEvent);
          console.log(originalEvent);
        }}
        events={[
          {
            event_id: 1,
            title: "Event 1",
            start: new Date("2023/12/2 09:30"),
            end: new Date("2023/12/2 10:30"),
            disabled:true
          },
          {
            event_id: 24,
            title: "Event 2",
            start: new Date("2023/12/4 10:00"),
            end: new Date("2023/12/4 11:00"),
          },
        ]}
        eventRenderer={({ event, ...props }) => {
            return (
                <Paper elevation={3} sx={{height:'100%'}}>
                  
                  <Typography fontWeight='bold'>{event.title}</Typography>
                  <Chip label={event.start.toDateString()}/>
                </Paper>
              // <div
              //   style={{
              //     display: "flex",
              //     flexDirection: "column",
              //     justifyContent: "space-between",
              //     height: "100%",
              //     background: "#757575"
              //   }}
              //   {...props}
              // >
              //   <div
              //     style={{ height: 20, background: "#ffffffb5", color: "black" }}
              //   >
              //     {event.start.toLocaleTimeString("pt-BR", {
              //       timeStyle: "short"
              //     })}
              //   </div>
              //   <div>{event.title}</div>
              //   <div
              //     style={{ height: 20, background: "#ffffffb5", color: "black" }}
              //   >
              //     {event.end.toLocaleTimeString("pt-BR", { timeStyle: "short" })}
              //   </div>
              // </div>
            );
        }}
      />
    </Stack>
  )
}