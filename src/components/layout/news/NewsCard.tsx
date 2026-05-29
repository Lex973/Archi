import {Avatar, Box, Card, CardContent, Chip, Typography, CardMedia, useTheme} from "@mui/material";
import {useState} from "react";
import photo from '../../../../public/news_banner.png'

interface NewsCardProps {
    author: string;
    imageURL: string;
    title: string;
    label: string;
    date: string;
    newsURL: string;
    description: string;
}

const NewsCard = ({author, imageURL, title, label, date, description, newsURL}: NewsCardProps) => {
    const [isHovering, setIsHovering] = useState(false);
    const theme = useTheme()

    const image = imageURL ?? photo
    return (
        <Card
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            elevation={0}
            sx={{
                borderRadius: 0,
                width: '100%',
                minHeight: 500,
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                mt: 3
            }}
        >
            <Box component='a' href={newsURL} target="_blank">
                <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt={title}
                />
            </Box>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
                <Box component='a' href={newsURL} target="_blank" sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1, textDecoration: 'none' }}>
                    <Chip label={label} size="small" sx={{ alignSelf: 'flex-start', backgroundColor: theme.palette.text.primary, color: 'white' }} />

                    <Typography variant="caption" color="text.secondary">{date}</Typography>

                    <Typography variant="subtitle1" fontWeight={500} sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        color: 'black'
                    }}>
                        {title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        flex: 1,
                    }}>
                        {description}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ width: 28, height: 28, fontSize: 11 }}>GM</Avatar>
                    <Typography variant="caption" color="text.secondary">{author}</Typography>
                </Box>
            </CardContent>


            <Box sx={{width: '100%', height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                {/* внутренняя линия */}
                <Box sx={{width: `${isHovering ? '100%' : '0%'}`, height: '2px', backgroundColor: theme.palette.text.primary, transition: 'width 0.3s ease'}}>

                </Box>
            </Box>
        </Card>
    )
}

export default NewsCard