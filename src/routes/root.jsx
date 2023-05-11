import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, Outlet } from 'react-router-dom';
import { Grid, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

const pages = [
    { name: '完整规则', to: 'rule' },
    { name: '卡片库', to: 'store' },
    { name: '新闻', to: 'news' },
    { name: '关于', to: 'about' },
];


function Root() {
    const { t, i18n } = useTranslation();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    console.log(i18n.language);
    const [lang, setLang] = React.useState(i18n.language.substring(0, 2));

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleChange = (event) => {
        setLang(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Container maxWidth="100%">
            <AppBar position="static">
                <Container maxWidth="100%">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
                                Math Magic Card
                            </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <Link key={page.to} to={page.to} style={{ textDecoration: 'none' }}>
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" xs={{ color: 'inherit', textDecoration: 'none' }}>{t(page.name)}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Math Magic Card
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Link key={page} to={page.to} style={{ textDecoration: 'none' }}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                                    >
                                        {t(page.name)}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                        <LanguageIcon />
                        <Select
                            labelId="lang-select"
                            id="lang-select"
                            value={lang}
                            onChange={handleChange}
                        >
                            <MenuItem key="zh" value={"zh"}>中文</MenuItem>
                            <MenuItem key="en" value={"en"}>English</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* 这里是内容页面 */}
            <Container id='detail' maxWidth="100%">
                <Grid container justifyContent={"center"}>
                    <Outlet />
                </Grid>
            </Container>
        </Container>
    );
}
export default Root;
