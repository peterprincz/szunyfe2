"use client"
import React, { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/legacy/image'
import { CarouselProperties } from '@/app/types/data-types';;


export default function Carousel({ photos, options = { loop: false } }: CarouselProperties) {
    const autoplay = useRef(
        Autoplay(
            {
                delay: 3000,
                stopOnInteraction: false,
                rootNode(emblaRoot) {
                    return emblaRoot.parentElement;
                },
            }
        )
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    const classes = {
        viewPort: {
            overflow: "hidden",
            width: "100%",
        },
        innerSlide: {
            position: "relative",
            overflow: "hidden",
            height: 500
        } as React.CSSProperties
    }

    return (
        <div>
            <div style={classes.viewPort} ref={emblaRef}>
                <div className="embla__container">
                    {photos.map((photo) => (
                        <div className="embla__slide" key={photo.id}>
                            <div style={classes.innerSlide}>
                                <Image alt="image" loading="eager" src={photo.src} layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};