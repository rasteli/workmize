import Head from "next/head"
import { useEffect, useState } from "react"
import { Box } from "@chakra-ui/react"

import { styles } from "../styles/pages/Dashboard"

import HomeIcon from "../assets/home.svg"

import { Table } from "../components/Table"
import { Toast } from "../components/Toast"
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
import { useWorkmizeColorMode } from "../hooks/useWorkmizeColorMode"

function Home() {
  const { user } = useAuth()
  const { aboveThreshold } = useViewport(756)
  const {
    taskLoading,
    userLoading,
    message,
    setters: { setTaskFilter }
  } = useTask()
  const {
    dra_containerBg,
    dash_borderBg,
    dash_containerBg,
    boxShadow,
    WorkmizeIso
  } = useWorkmizeColorMode()

  const [cardOpen, setCardOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)

  const isAdmin = user?.role === "ADMIN"

  useEffect(() => {
    setTaskFilter(isAdmin ? "ALL" : "CREATED_BY_ME")
  }, [isAdmin, setTaskFilter, user])

  if (taskLoading || userLoading) {
    return <div />
  }

  return (
    <>
      <Head>
        <title>Workmize - Dashboard</title>
        <meta charSet="utf-8" />
      </Head>

      <div style={styles.container(dash_containerBg)}>
        {aboveThreshold && (
          <aside style={styles.aside}>
            <div style={styles.homeIcon(dra_containerBg, boxShadow)}>
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

        <main style={styles.main(dash_borderBg)}>
          <header style={styles.header}>
            <div style={styles.userInfo}>
              <UserImage src={user?.avatar || "no-photo.jpg"} size={40} />

              <h1 style={styles.h1}>Minhas tarefas</h1>

              <Box
                position="relative"
                onMouseEnter={() => setCardOpen(true)}
                onMouseLeave={() => setCardOpen(false)}
              >
                <UserImage
                  src={user?.avatar || "no-photo.jpg"}
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
                  onClick={() => setTaskFilter(isAdmin && "ALL")}
                  label="Todas"
                />
                <FilterButton
                  onClick={() => setTaskFilter("CREATED_BY_ME")}
                  label="Criadas por mim"
                />
                <FilterButton
                  onClick={() => setTaskFilter("IAM_RESPONSIBLE")}
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

      <CreateTaskModal
        open={modalOpen}
        setOpen={setModalOpen}
        setToastOpen={setToastOpen}
      />
      {message && (
        <Toast
          open={toastOpen}
          setOpen={setToastOpen}
          variant={message.type}
          message={message.text}
        />
      )}
    </>
  )
}

export default withAuth(Home)
