import Head from "next/head"
import { useState } from "react"
import { Box } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "../styles/pages/Dashboard"

import HomeIcon from "../assets/home.svg"
import WorkmizeIsoDark from "../assets/workmize_iso_dark.svg"
import WorkmizeIsoLight from "../assets/workmize_iso_light.svg"

import { Table } from "../components/Table"
import { Button } from "../components/Button"
import { useViewport } from "../hooks/useViewport"
import { UserImage } from "../components/UserImage"
import { FilterButton } from "../components/FilterButton"
import { UserInfoCard } from "../components/UserInfoCard"
import { ToggleColorMode } from "../components/ToggleColorMode"
import { CreateTaskModal } from "../components/CreateTaskModal"

import { useTask } from "../contexts/TaskContext"
import { useAuth } from "../contexts/AuthContext"
import { withAuth } from "../components/AuthenticationHOC"

function Home() {
  const { user } = useAuth()
  const { aboveThreshold } = useViewport(756)
  const { taskLoading, userLoading, setters } = useTask()

  const [cardOpen, setCardOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const borderBg = useColorModeValue("#C8C8C8", "#464750")
  const homeIconBg = useColorModeValue("#FFFFFF", "#171923")
  const containerBg = useColorModeValue("#F6F7FB", "#22242E")
  const WorkmizeIso = useColorModeValue(WorkmizeIsoLight, WorkmizeIsoDark)
  const homeIconBoxShadow = useColorModeValue("0px 2px 5px #0000001C", "none")

  if (taskLoading || userLoading) {
    return <div />
  }

  return (
    <>
      <Head>
        <title>Workmize - Dashboard</title>
        <meta charSet="utf-8" />
      </Head>

      <div style={styles.container(containerBg)}>
        {aboveThreshold && (
          <aside style={styles.aside}>
            <div style={styles.homeIcon(homeIconBg, homeIconBoxShadow)}>
              <HomeIcon />
            </div>
            <div style={styles.asideBottom}>
              <ToggleColorMode
                variant="iso"
                style={styles.toggleColorMode(aboveThreshold)}
              />
              <WorkmizeIso style={styles.workmizeIso} />
            </div>
          </aside>
        )}

        <main style={styles.main(borderBg)}>
          <header style={styles.header}>
            <div style={styles.userInfo}>
              <UserImage src={user.avatar} size={40} />

              <h1 style={styles.h1}>Minhas tarefas</h1>

              <Box
                position="relative"
                onMouseEnter={() => setCardOpen(true)}
                onMouseLeave={() => setCardOpen(false)}
              >
                <UserImage
                  src={user.avatar}
                  size={70}
                  transition="0.2s"
                  _hover={{ borderRadius: 20 }}
                />

                <UserInfoCard open={cardOpen} />
              </Box>
            </div>

            <div style={styles.filter(aboveThreshold)}>
              <h2 style={styles.h2}>FILTROS RÁPIDOS</h2>

              <div>
                <FilterButton
                  onClick={() => setters.setTaskFilter("ALL")}
                  label="Todas"
                />
                <FilterButton
                  onClick={() => setters.setTaskFilter("CREATED_BY_ME")}
                  label="Criadas por mim"
                />
                <FilterButton
                  onClick={() => setters.setTaskFilter("IAM_RESPONSIBLE")}
                  label="Sou responsável"
                />
              </div>
            </div>

            <Button
              label="Nova tarefa"
              width="150px"
              marginBottom={25}
              marginTop={45}
              onClick={() => setModalOpen(true)}
            />
          </header>
          <Table />

          {!aboveThreshold && (
            <ToggleColorMode
              variant="iso"
              style={styles.toggleColorMode(aboveThreshold)}
            />
          )}
        </main>
      </div>

      <CreateTaskModal open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}

export default withAuth(Home)
