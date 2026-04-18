'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TeamMemberCardProps {
  position: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  subtitle?: string
  description?: string
  className?: string
}

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?fm=jpg&q=60',
  subtitle,
  description = 'Jennie is a skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
  className,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative flex flex-col justify-center', className)}
    >
      {/* jobPosition label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'mb-4 text-xs font-medium tracking-[0.3em] text-muted uppercase',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      {/* Two-column layout: image + info side by side */}
      <div className={cn(
        'grid grid-cols-[360px_1fr] gap-0',
        isPositionRight && 'grid-cols-[1fr_360px]'
      )}>
        {/* Portrait image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative h-[500px] overflow-hidden',
            isPositionRight && 'order-2'
          )}
        >
          <div className='pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_55%_40%,rgba(94,134,180,0.22),transparent_68%)] blur-3xl' />
          <img
            src={imageUrl}
            alt={fullName}
            className='h-full w-full object-cover duration-500 ease-[0.22,1,0.36,1] hover:scale-105'
          />
          <div className='pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/38 via-transparent to-black/8' />
          <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-r from-transparent via-black/50 to-[hsl(var(--bg))]' />
          <div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent via-black/35 to-[hsl(var(--bg))]' />
          <div className='pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[hsl(var(--bg))]/55 to-transparent' />
        </motion.div>

        {/* Info column — uses grid row to match image height, content centered via flex */}
        <motion.div
          initial={{ opacity: 0, x: isPositionRight ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative z-[2] flex h-[500px] flex-col justify-center gap-8 px-8 md:px-12',
            isPositionRight ? 'order-1 items-end pr-10 pl-8' : 'items-center'
          )}
        >
          {/* Name + subtitle */}
          <div className={cn('flex w-full', isPositionRight ? 'justify-end' : 'justify-center')}>
            <div className={cn('inline-flex max-w-full flex-col', isPositionRight ? 'items-end text-right' : 'items-start text-left')}>
              <p className='whitespace-nowrap text-[clamp(3.5rem,6.8vw,5rem)] leading-none font-extralight tracking-tight text-text-primary'>
                <span className='font-normal'>{fullName}</span>
              </p>
              {subtitle && (
                <p className='mt-4 self-center text-center text-xs font-medium tracking-[0.3em] text-muted uppercase'>
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <p
            className={cn(
              'w-full max-w-[320px] text-sm leading-[1.8] text-muted',
              isPositionRight ? 'text-right' : 'text-center'
            )}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
