import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  UserGroupIcon,
  CalendarIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function SidebarWithContentSeparator() {
  const [open, setOpen] = React.useState(0);
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      animate={{ width: isExpanded ? 320 : 110 }}
      className=" p-4  shadow-blue-gray-900/5"
    >
      <Card className="h-full w-full p-4">
        <div className="mb-2 p-4 flex justify-between items-center">
          {isExpanded && (
            <Typography variant="h5" color="blue-gray">
              Alumni Portal
            </Typography>
          )}
          <button onClick={toggleSidebar}>
            {isExpanded ? (
              <ChevronLeftIcon className="h-5 w-5" />
            ) : (
              <ChevronRightIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        <List>
          <Link to="/profile/:userId" className="text-blue-gray-900 hover:text-blue-gray-600">
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              {isExpanded && "Profile"}
            </ListItem>
          </Link>
          <Link to="/user-directory" className="text-blue-gray-900 hover:text-blue-gray-600">
            <ListItem>
              <ListItemPrefix>
                <UserGroupIcon className="h-5 w-5" />
              </ListItemPrefix>
              {isExpanded && "User Directory"}
            </ListItem>
          </Link>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <CalendarIcon className="h-5 w-5" />
                </ListItemPrefix>
                {isExpanded && (
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Events
                  </Typography>
                )}
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link to="/events" className="text-blue-gray-900 hover:text-blue-gray-600">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    {isExpanded && "Manage Events"}
                  </ListItem>
                </Link>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  {isExpanded && "Upcoming Events"}
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  {isExpanded && "Past Events"}
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  {isExpanded && "Event Gallery"}
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Link to="/jobs" className="text-blue-gray-900 hover:text-blue-gray-600">
            <ListItem>
              <ListItemPrefix>
                <BriefcaseIcon className="h-5 w-5" />
              </ListItemPrefix>
              {isExpanded && "Job Postings"}
            </ListItem>
          </Link>
          <Link to="/donation-analytics" className="text-blue-gray-900 hover:text-blue-gray-600">
            <ListItem>
              <ListItemPrefix>
                <CurrencyDollarIcon className="h-5 w-5" />
              </ListItemPrefix>
              {isExpanded && "Donations"}
            </ListItem>
          </Link>
          <Link to="/forum" className="text-blue-gray-900 hover:text-blue-gray-600">
            <ListItem>
              <ListItemPrefix>
                <ChatBubbleOvalLeftIcon className="h-5 w-5" />
              </ListItemPrefix>
              {isExpanded && "Forum"}
            </ListItem>
          </Link>
          <hr className="my-2 border-blue-gray-50" />
          <Link to="/messages" className="text-blue-gray-900 hover:text-blue-gray-600">
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              {isExpanded && "Messages"}
              {isExpanded && (
                <ListItemSuffix>
                  <Chip
                    value="New"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              )}
            </ListItem>
          </Link>
          <Link to="/upload-students" className="text-blue-gray-900 hover:text-blue-gray-600">
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              {isExpanded && "UploadCSV"}
            </ListItem>
          </Link>
          <Link to="/logout" className="text-blue-gray-900 hover:text-blue-gray-600">
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              {isExpanded && "Log Out"}
            </ListItem>
          </Link>
        </List>
      </Card>
    </motion.div>
  );
}
